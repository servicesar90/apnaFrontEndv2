import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { handleOtp, resendOtpApiCall } from "../../../API/ApiFunctions";
import { showErrorToast, showSuccessToast } from "../../ui/toast";

export default function OtpModal({ onClose, mobile, onSubmit }) {
  const [otp, setOtp] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  // Start focus on first input
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  // Countdown logic
  useEffect(() => {
  let timer;

  if (secondsLeft > 0) {
    setCanResend(false);
    timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
  } else {
    setCanResend(true);
  }

  return () => clearInterval(timer);
}, [secondsLeft]);


  // Handle OTP input change
  const handleChange = async (index, value) => {
    if (!/^\d?$/.test(value)) return;

    let updatedOtp = otp.split("");
    updatedOtp[index] = value;
    const newOtp = updatedOtp.join("");
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newOtp.length === 4) {
      const response = await handleOtp({
        phone: mobile,
        role: "employee",
        otp: newOtp.toString(),
      });

      if (response) {
        if (response.data.user.profile) {
          onSubmit();
          navigate("/jobs");
          
        } else {
          navigate("/profile");
        
        }
        onClose();
      } else {
        setOtp("");
        inputsRef.current[0]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleResend = async () => {
  if (!canResend) return;

  const response = await resendOtpApiCall({ phone: mobile, role: "employee" });

  if (response?.success) {
    setOtp("");
    setSecondsLeft(30);   // <- Restart the timer
    inputsRef.current[0]?.focus();
    showSuccessToast("Login successfull")
  } else {
    showErrorToast("Failed to resend OTP. Try again.");
  }
};


  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-4/5 md:w-full max-w-md p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-secondary"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg font-medium text-[#0784C9] mb-1">Enter OTP</h2>
        <p className="text-14 text-gray-650 mb-4">
          We have sent an OTP on: <span className="font-medium">{mobile}</span>
        </p>

        <div className="flex justify-between gap-2 mb-4">
          {[0, 1, 2, 3].map((idx) => (
            <input
              key={idx}
              value={otp[idx] || ""}
              type="number"
              ref={(el) => (inputsRef.current[idx] = el)}
              onChange={(e) => handleChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              maxLength={1}
              className="w-12 h-12 border border-[#0784C9] rounded-md text-center text-16 focus:outline-none text-[#666666]"
            />
          ))}
        </div>

        <div className="text-14 text-gray-650 text-center mb-2">
          {secondsLeft > 0
            ? `00:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`
            : "You can resend now"}
        </div>

        <div className="text-center text-14">
          Didn’t get the OTP?{" "}
          <button
            onClick={handleResend}
            disabled={!canResend}
            className={`font-medium ${
              canResend
                ? "text-[#0784C9] hover:underline"
                : "text-gray-400 cursor-not-allowed"
            }`}
          >
            Resend
          </button>
        </div>
      </div>
    </div>
  );
}
