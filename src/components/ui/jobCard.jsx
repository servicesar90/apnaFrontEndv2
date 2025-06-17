// import { useNavigate } from 'react-router-dom'
// import WhatshotIcon from '@mui/icons-material/Whatshot';
// import { WorkOutline } from '@mui/icons-material';
// import BusinessIcon from '@mui/icons-material/Business';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { ChevronRight } from 'lucide-react';

// export default function JobCard({ job }) {
//     const navigate = useNavigate()

//     return (
//         <div
//             key={job?.id}
//             className="bg-white p-5 mt-6 rounded-lg shadow-xl border md:max-w-[50vw]  cursor-pointer"
//             onClick={() => navigate(`/jobs/${job.id}`)}
//         >
//             {/* <div className="flex flex-row gap-2 text-orange-600 text-14 font-medium mb-1"><WhatshotIcon />Urgently hiring</div> */}

//             {/* <h2 className="flex flex-row gap-2 text-16 font-medium text-gray-800"><WorkOutline sx={{ fontSize: 20, color: "#0784C9" }} /></h2> */}
//             <div className='w-full flex justify-between items-center pr-4'>

//                 <p className="flex flex-row gap-2 text-14 text-gray-650">
//                     <div
//   className={`flex justify-center items-center border bg-gray-200 rounded-lg w-10 h-10 ${
//     job?.Employer.company.logoUrl ? '' : 'p-2'
//   }`}
// >
//   {job?.Employer.company.logoUrl ? (
//     <img
//       src={job.Employer.company.logoUrl}
//       className="w-8 h-8 object-contain"
//       alt="Company Logo"
//     />
//   ) : ( 
//     <BusinessIcon sx={{ fontSize: 24, color: "#0784C9" }} />
//   )}
// </div>
//   <div className='flex flex-col gap-1'><div className='font-bold text-secondary text-18'>{job?.jobTitle || "N/A"}</div><div className='text-gray-650 text-12 font-semibold'>{job?.Employer.company.companyName || "N/A"}</div></div></p>
//                 <ChevronRight size={30} className='hidden md:block flex items-center justify-center p-1 text-secondary bg-gray-200 rounded-[50%]'/>
//             </div>
//             <p className="flex flex-row gap-2 mt-4 text-14 text-gray-650 mt-1"><LocationOnIcon sx={{ fontSize: 16, color: "#0784C9" }} />{job?.location || "N/A"}</p>
//             <p className="flex flex-row gap-2 text-14 text-gray-600 mb-2 font-medium mt-1"><CurrencyRupeeIcon sx={{ fontSize: 16, color: "#0784C9" }} />{job?.minimumSalary ? `${job?.minimumSalary} - ${job?.maximumSalary}/Month` : "N/A"}</p>
//             <hr />
//             <div className="flex flex-wrap gap-2 mt-3">

//                 {job?.workLocationType && <span className="bg-light text-gray-800 font-medium px-2 py-1 rounded-md text-12">
//                     {job?.workLocationType}
//                 </span>}

//                 {job?.jobType && <span className="bg-light text-gray-800 font-medium px-2 py-1 rounded-md text-12">
//                     {job?.jobType}
//                 </span>}

//                 {job?.payType && <span className="bg-light text-gray-800 font-medium px-2 py-1 rounded-md text-12">
//                     {job?.payType}
//                 </span>}

//             </div>
//         </div>
//     )
// }



// 

import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Building,
  MapPin,
  IndianRupee,
  ChevronRight,
  Flame,
  Clock,
  Users,
} from "lucide-react";

export default function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] cursor-pointer"
      onClick={() => navigate(`/jobs/${job.id}`)}
    >
      {/* Urgently Hiring Badge - Minimal */}
      <div
        className="border-b border-gray-100 px-4 py-2"
        style={{ backgroundColor: "#dff3f9" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#003B70" }}
          ></div>
          <span className="font-medium text-xs" style={{ color: "#003B70" }}>
            Urgently hiring
          </span>
        </div>
      </div>

      <div className="p-4">
        {/* Company Logo & Header - Compact */}
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0">
            {job?.Employer?.company?.logoUrl ? (
              <img
                src={job.Employer.company.logoUrl}
                alt={`${job?.Employer?.company?.companyName} logo`}
                className="w-12 h-12 rounded-lg object-cover border border-gray-200"
              />
            ) : (
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-200"
                style={{ backgroundColor: "#dff3f9" }}
              >
                <Building className="w-6 h-6" style={{ color: "#0784C9" }} />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
              {job?.jobTitle || "N/A"}
            </h3>

            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Building className="w-3.5 h-3.5" style={{ color: "#0784C9" }} />
              <span className="font-medium text-sm truncate">
                {job?.Employer?.company?.companyName || "N/A"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-3.5 h-3.5" style={{ color: "#0784C9" }} />
              <span className="text-sm">{job?.location || "N/A"}</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <ChevronRight
              className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-all duration-200"
              style={{ color: "#0784C9" }}
            />
          </div>
        </div>

        {/* Salary Information - Compact */}
        <div
          className="rounded-lg p-3 mb-3 border border-gray-100"
          style={{ backgroundColor: "#dff3f9" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IndianRupee className="w-4 h-4" style={{ color: "#003B70" }} />
              <span
                className="font-medium text-sm"
                style={{ color: "#003B70" }}
              >
                Monthly Salary
              </span>
            </div>
            <div className="font-bold text-sm" style={{ color: "#003B70" }}>
              {job?.minimumSalary
                ? `₹${job?.minimumSalary} - ₹${job?.maximumSalary}`
                : "N/A"}
            </div>
          </div>
        </div>

        {/* Job Type Badges - Minimal */}
        <div className="flex flex-wrap gap-2 mb-3">
          {job?.workLocationType && (
            <span
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                backgroundColor: "#dff3f9",
                color: "#003B70",
                borderColor: "#0784C9",
              }}
            >
              {job.workLocationType}
            </span>
          )}

          {job?.jobType && (
            <span
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                backgroundColor: "#dff3f9",
                color: "#003B70",
                borderColor: "#0784C9",
              }}
            >
              {job.jobType}
            </span>
          )}

          {job?.payType && (
            <span
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                backgroundColor: "#dff3f9",
                color: "#003B70",
                borderColor: "#0784C9",
              }}
            >
              {job.payType}
            </span>
          )}
        </div>

        {/* Footer Stats - Compact */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 text-gray-500">
            <Users className="w-4 h-4" style={{ color: "#0784C9" }} />
            <span className="text-xs">
              {job?.JobApplications?.length || 0} applicants
            </span>
          </div>

          <div className="text-right">
            <div
              className="px-4 py-2 rounded-lg text-xs font-semibold shadow-sm transition-all duration-200 group-hover:shadow-md"
              style={{
                backgroundColor: "#0784C9",
                color: "white",
              }}
            >
              View Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

