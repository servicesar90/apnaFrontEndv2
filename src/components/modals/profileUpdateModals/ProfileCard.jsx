import React from 'react';
import { Mail, Phone, MapPin, Calendar, Briefcase, CurrencyRupee, Timer } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <div className="relative w-20 h-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="avatar"
            className="rounded-full w-20 h-20"
          />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
            100%
          </span>
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Yash Sharma</h2>
          <p className="text-sm text-gray-600">Vertical Head Perm & RPO– Talent Acquisition and Recruitment</p>
          <p className="text-sm text-gray-500">at AR Group Pvt. Ltd.</p>
        </div>

        {/* Profile Updated */}
        <div className="text-xs text-gray-400">Profile last updated · 12 Apr,2025</div>
      </div>

      {/* Divider */}
      <hr />

      {/* Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span>New Delhi, INDIA</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-gray-500" />
          <span>9999324282</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span>14 Years</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-500" />
          <span>Yashsharma17@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <CurrencyRupee className="w-4 h-4 text-gray-500" />
          <span>₹ 19,55,000</span>
        </div>
        <div className="flex items-center gap-2">
          <Timer className="w-4 h-4 text-gray-500" />
          <span>3 Months notice period</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
