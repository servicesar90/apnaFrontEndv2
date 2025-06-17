import { useState } from "react";
import { handlelogin } from "../../../API/ApiFunctions";
import { showErrorToast } from "../../ui/toast";

export default function CandidateLoginModal({ onClose, mobile, setMobile, onSubmit }) {
  const [countryCode, setCountryCode] = useState("+91");
  const [isComplete, setIsComplete]= useState(false)

  const handleChangeMobile = async (e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
      setMobile(value);

      if (value.length === 10) {
        setIsComplete(true)
        const response = await handlelogin({ phone: (value).toString(), role: "employee" });
       
        if (response) {
          setMobile(value);
          onSubmit()
        } else {
          setMobile("");
          showErrorToast("error in logging in please try again in some time")
   
        }
      }
    }
  };

  const isValidMobile = /^\d{10}$/.test(mobile);



  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-4/5 md:w-full max-w-md p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-secondary mb-2">Welcome back!</h2>
        <p className="text-14 text-gray-650 mb-6">Enter your mobile number to continue</p>

        <div className="flex gap-2 mb-4">
          <input
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            placeholder="+91"
            className="w-20 border rounded px-3 py-2 text-14 focus:outline-none focus:ring-2 focus:ring-[#0784C9] border-gray-300"
          />
          <input
            type="tel"
            value={mobile}
            onChange={handleChangeMobile}
            placeholder="Enter 10 digit mobile number"
            className="w-full border rounded px-3 py-2 text-14 focus:outline-none focus:ring-2 focus:ring-[#0784C9] text-[#666666] border-gray-300"
          />
        </div>

        {!isValidMobile && mobile.length > 0 && (
          <p className="text-sm text-red-500 mb-2">Please enter a valid 10-digit mobile number</p>
        )}

           <button
          disabled={isComplete}
          onClick={()=>showErrorToast("Enter Valid Number")}
          className={isComplete?"w-full font-medium py-2 rounded bg-gray-300 text-gray-650 cursor-pointer":"w-full font-medium py-2 rounded bg-secondary text-white cursor-pointer"}
        >
          Continue
        </button>
      </div>


    </div>
  );
}
