import React from "react";
import CreateProfileModal from "../modals/profileModals/createProfileModal";

export default function ProfileFill() {
  

    return (
        <div className="flex w-full min-h-screen bg-gray-100">
            {/* Left Section */}
            <div className="hidden md:flex w-1/3 bg-blue-700 text-white p-6 flex flex-col justify-center items-center space-y-6">
                <div className="bg-white text-blue-800 rounded-lg p-4 w-4/5">
                    <h2 className="text-lg font-bold mb-2">Complete your profile!</h2>
                    <ul className="list-disc ml-5 space-y-1 text-sm">
                        <li>Personalised job matches</li>
                        <li>Direct connect with HRs</li>
                        <li>Latest updates on the job</li>
                    </ul>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" className="w-24 h-24 rounded-full" />
                <div className="text-xs mt-4 text-center">
                    Trusted by over 2 lakhs+ companies
                    <div className="flex gap-2 justify-center mt-2 opacity-50 text-[10px]">
                        <span>Paytm</span> <span>Uber</span> <span>Grab</span> <span>Licious</span>
                    </div>
                </div>
            </div>

            <CreateProfileModal  className="w-2/3 p-8 bg-white overflow-y-auto" />
        </div>
    );
}
