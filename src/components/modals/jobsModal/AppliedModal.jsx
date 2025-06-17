
import React from "react";

const AppliedModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-green-50 w-full max-w-md mx-auto rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 text-xl"
        >
          ×
        </button>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="text-green-600 text-4xl">✔</div>
          <h2 className="text-lg font-semibold text-gray-800">
            Applied successfully
          </h2>
          <p className="text-sm text-gray-600">
            Your application is successfully sent to HR
          </p>
          <div className="bg-white border border-gray-200 rounded-md p-4 w-full space-y-2">
            <p className="text-sm font-medium text-gray-800">Contact HR now</p>
            <p className="text-xs text-gray-600">
              Download the app to get HR contact info and track your job application
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.apna.talent"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center text-white bg-[#1f8267] px-4 py-2 rounded-md font-medium"
            >
              Download Apna App
            </a>
          </div>
          <button
            onClick={onClose}
            className="w-full bg-green-600 text-white py-2 rounded-md font-semibold"
          >
            Explore best match jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedModal;
