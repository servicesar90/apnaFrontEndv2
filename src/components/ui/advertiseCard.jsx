import { Button, Card, CardContent } from "@mui/material";
import { Badge, Building2, IndianRupee, MapPin, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function SimpleJobCard({ job, onClick }) {
 
  const applicantCount = job?.JobApplications?.length || 0;


  return (
    <Card
      className="group bg-white opacity-100 z-50 relative m-4 w-full overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl max-w-md bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 border-2 border-transparent hover:border-blue-400/50"
      
      onClick={onClick}
    >
    
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold px-2 py-1 text-xs animate-pulse border-0">
            <Zap className="w-3 h-3 mr-1" />
            Urgently hiring
          </Badge>
        </div>
      

      <CardContent className="p-5">
        {/* Company Logo & Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="relative">
            {job?.Employer?.company?.logoUrl ? (
              <img
                src={job.Employer.company.logoUrl}
                alt={`${job?.Employer?.company?.companyName} logo`}
                className="w-12 h-12 rounded-lg object-cover shadow-md ring-2 ring-white"
              />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md ring-2 ring-white">
                <Building2 className="w-6 h-6 text-white" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
              {job?.jobTitle || "N/A"}
            </h3>
            <div className="flex items-center gap-1 text-gray-600 mb-1">
              <Building2 className="w-3 h-3" />
              <span className="text-sm font-medium truncate">
                {job?.Employer?.company?.companyName || "N/A"}
              </span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <MapPin className="w-3 h-3" />
              <span className="text-sm truncate">{job?.location || "N/A"}</span>
            </div>
          </div>
        </div>

        {/* Salary Information */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 mb-3 border border-green-200/50">
          <div className="flex items-center gap-1 mb-1">
            <IndianRupee className="w-4 h-4 text-green-600" />
            <span className="text-xs font-medium text-green-800">
              Monthly Salary
            </span>
          </div>
          <p className="text-sm font-bold text-green-900">
            {job?.minimumSalary
              ? `₹${job.minimumSalary.toLocaleString()} - ₹${job.maximumSalary?.toLocaleString()}`
              : "Salary not disclosed"}
          </p>
        </div>

        {/* Job Type Badges */}
        <div className="flex flex-wrap gap-1 mb-4">
          {job?.workLocationType && (
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-800 border-blue-200 text-xs"
            >
              {job.workLocationType}
            </Badge>
          )}
          {job?.jobType && (
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-800 border-purple-200 text-xs"
            >
              {job.jobType}
            </Badge>
          )}
          {job?.payType && (
            <Badge
              variant="secondary"
              className="bg-orange-100 text-orange-800 border-orange-200 text-xs"
            >
              {job.payType}
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <div className="flex items-center gap-1 text-gray-600">
            <Users className="w-3 h-3" />
            <span className="text-xs">
              {applicantCount} applicant{applicantCount !== 1 ? "s" : ""}
            </span>
          </div>

          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-4 text-xs shadow-md hover:shadow-lg transition-all duration-200"
          >
            <p className="text-white z-20 pointer-cursor">View Details</p>
            
          </Button>
        </div>
      </CardContent>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
}