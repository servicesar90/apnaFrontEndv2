import toast from "react-hot-toast";

export const showSuccessToast = (message) =>
  toast.success(message, {
    duration: 3000,
    style: {
      background: "#0784c9 ",
      color: "#fff",
      border: "1px solid #0784c9",
      padding: "12px 16px",
      fontSize: "14px",
      borderRadius: "8px",
    },
    iconTheme: {
      primary: "#fff",
      secondary: "#0784c9",
    },
  });

export const showErrorToast = (message) =>
  toast.error(message, {
    duration: 3000,
    style: {
      background: "#330000",
      color: "#ff6666",
      border: "1px solid #ff6666",
    },
    iconTheme: {
      primary: "#ff6666",
      secondary: "#330000",
    },
  });
