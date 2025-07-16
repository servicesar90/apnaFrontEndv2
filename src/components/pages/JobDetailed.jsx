import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { applyJobs, getJobs } from "../../API/ApiFunctions";
import "react-quill-new/dist/quill.snow.css";
import {
  BookUser,
  Briefcase,
  Building,
  CalendarArrowUp,
  CircleGauge,
  GraduationCap,
  IndianRupee,
  MapPin,
  SunMoon,
  Timer,
  Users,
  Share,
  X,
  CheckCircle,
  Phone,
  Mail,
  AlertTriangle,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../Redux/getData";
import { Skeleton } from "@mui/material";

const faqData = [
  {
    question:
      "How much salary can I expect as a Computer Hardware Technician in Arvind Solution in Delhi-NCR?",
    answer:
      "You can expect a salary as per industry standards based on your experience and skillset. The job posting mentions a fixed salary of ₹10,000 to ₹15,000 per month.",
  },
  {
    question:
      "What is the eligibility criteria to apply for Computer Hardware Technician in Arvind Solution in Delhi-NCR?",
    answer:
      "You should have relevant experience or educational qualifications in Computer Hardware or related fields. Basic troubleshooting knowledge is preferred.",
  },
  {
    question: "Is there any specific skill required for this job?",
    answer:
      "Yes, basic knowledge of computer hardware troubleshooting, assembling, and networking is required.",
  },
  {
    question: "Who can apply for this job?",
    answer:
      "Anyone with the required skills and availability in the specified location can apply.",
  },
  {
    question: "Is it a work from home job?",
    answer: "No, this is an on-site job and not work-from-home.",
  },
  {
    question:
      "Are there any charges or deposits required while applying for the role or while joining?",
    answer:
      "No, there are no charges or deposits required to apply for or join this job.",
  },
  {
    question: "How can I apply for this job?",
    answer:
      "You can apply by clicking on the 'Apply' button provided in this page. Make sure you are logged in to your account.",
  },
  {
    question: "What is the last date to apply?",
    answer:
      "The last date is not specified, but it's recommended to apply as soon as possible due to urgent hiring.",
  },
];


const AppliedModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="text-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: "#dff3f9" }}
        >
          <CheckCircle className="w-6 h-6" style={{ color: "#0784C9" }} />
        </div>

        <h3 className="text-xl font-bold mb-3" style={{ color: "#003B70" }}>
          Application Submitted!
        </h3>

        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Your application has been submitted successfully. The employer will
          review your application and get back to you soon.
        </p>

        <div
          className="rounded-lg p-4 mb-6 text-left border"
          style={{ backgroundColor: "#dff3f9", borderColor: "#0784C9" }}
        >
          <h4 className="font-semibold mb-3" style={{ color: "#003B70" }}>
            What happens next?
          </h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#0784C9" }}
              ></div>
              <span>Employer reviews within 2-3 business days</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#0784C9" }}
              ></div>
              <span>You'll receive updates via email and SMS</span>
            </div>

          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          style={{ backgroundColor: "#0784C9" }}
        >
          Continue Browsing
        </button>
      </div>
    </div>
  </div>
);




const JobDetails = () => {
  const [data, setData] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showAppliedModal, setShowAppliedModal] = useState(false);
  const [applied, setApplied] = useState(false);
  const [appliedData, setAppliedData] = useState(null);
  const dispatch = useDispatch()


  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("User"));



  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch])

  const { jobs, loading, error, employee } = useSelector((state) => state.getDataReducer);


  useEffect(() => {

    const newjobs = jobs?.filter((job) => job.id == id);
    setData(newjobs?.[0]);
  }, [jobs]);


  useEffect(() => {
    const alreadyApplied = data?.JobApplications.filter(
      (ids) => ids.employeeId == user?.id
    );

    if (alreadyApplied?.length > 0) {
      setApplied(true);
      setAppliedData(alreadyApplied[0]);
    } else {
      setApplied(false);
    }
  }, [data]);


 
  const handleApplyClick = async () => {
    setApplied(true)

  

    const dataa={number: user?.phone, jobRole: employee?.EmployeeExperiences[0]? employee?.EmployeeExperiences[0]?.jobTitle : "Fresher", jobApplied: data?.jobRoles, totalExperience: employee?.TotalExperience?.years, company: employee?.EmployeeExperiences[0].companyName}
    console.log(dataa)
    const response = await applyJobs(id, data?.employerId, dataa);
    if (response) {
      setShowAppliedModal(true);
      dispatch(fetchJobs());
      setAppliedData(response.data.application)

    } else {
      showErrorToast("could not apply");
      setApplied(false)
    }
  };


  const DetailRow = ({ icon, label, value }) => (
    <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
      <div className="flex items-center gap-3">
        <div
          className="p-2 rounded-lg"
          style={{ backgroundColor: "#dff3f9", color: "#0784C9" }}
        >
          {icon}
        </div>
        <span className="text-gray-700 font-medium text-sm">{label}</span>
      </div>
      <div
        className="font-semibold text-sm max-w-[200px] text-right"
        style={{ color: "#003B70" }}
      >
        {value}
      </div>
    </div>
  );

  const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Check this out!',
        text: 'Here is something interesting I found.',
        url: window.location.href,
      });
      console.log('Content shared successfully');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  } else {
    alert('Sharing is not supported in this browser.');
  }
};


  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );

  if (loading) {
    return (

      <div className="flex justify-center items-center w-full min-h-[80vh] bg-black/20">
        <img
          src="/unigrowLogo.png"
          alt="logo"
          className="w-40 h-16 animate-heartbeat"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Compact Header Section */}
          <div
            className="text-white relative overflow-hidden"
            style={{ backgroundColor: "#0784C9" }}
          >
            <div className="relative p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Job Title & Company - Compact */}
                <div className="flex-1">
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-3 border"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">Urgently Hiring</span>
                  </div>

                  <h1 className="text-2xl lg:text-3xl font-bold mb-2 leading-tight">
                    {data?.jobTitle}
                  </h1>

                  <div className="flex items-center gap-2 text-blue-100 mb-2">
                    <Building className="w-5 h-5" />
                    <span className="text-lg font-semibold">
                      {data?.Employer?.company.companyName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-blue-100">
                    <MapPin className="w-4 h-4" />
                    <span>{data?.location}</span>
                  </div>
                </div>

                {/* Compact Stats */}
                <div className="grid grid-cols-2 gap-3 lg:w-64">
                  <div
                    className="rounded-lg p-3 text-center border"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-medium">Applicants</span>
                    </div>
                    <div className="text-lg font-bold">
                      {data?.JobApplications.length}
                    </div>
                  </div>

                  <div
                    className="rounded-lg p-3 text-center border"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <IndianRupee className="w-4 h-4" />
                      <span className="text-xs font-medium">Salary</span>
                    </div>
                    <div className="text-sm font-bold">
                      ₹{data?.minimumSalary} - ₹{data?.maximumSalary}
                    </div>
                  </div>

                  {data?.incentive && (
                    <div
                      className="rounded-lg p-3 text-center border col-span-2"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <CircleGauge className="w-4 h-4" />
                        <span className="text-xs font-medium">
                          Earning Potential
                        </span>
                      </div>
                      <div className="text-lg font-bold">
                        ₹{data?.maximumSalary}+ {data?.incentive}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Job Type Tags */}
          <div
            className="px-6 py-4 border-b border-gray-100"
            style={{ backgroundColor: "#dff3f9" }}
          >
            <div className="flex flex-wrap gap-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "white",
                  color: "#003B70",
                  borderColor: "#0784C9",
                }}
              >
                {data?.workLocationType}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "white",
                  color: "#003B70",
                  borderColor: "#0784C9",
                }}
              >
                {data?.jobType}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "white",
                  color: "#003B70",
                  borderColor: "#0784C9",
                }}
              >
                {data?.experience}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "white",
                  color: "#003B70",
                  borderColor: "#0784C9",
                }}
              >
                {data?.payType}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "white",
                  color: "#003B70",
                  borderColor: "#0784C9",
                }}
              >
                {data?.english} English
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-4 bg-white border-b border-gray-100">
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                <div onClick={()=>handleShare()} className="flex items-center justify-center gap-2">
                  <Share className="w-4 h-4" />
                  Share
                </div>
              </button>
              <button
                onClick={handleApplyClick}
                disabled={applied || data?.status == "E"}
                className={`flex-1 sm:flex-none font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-white`}
                style={{
                  backgroundColor: applied ? "#22c55e" : data?.status == "E" ?"rgba(240, 16, 16, 0.5)":"#0784C9",
                }}
              >
                {applied ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {appliedData?.status ? appliedData.status : "Applied"}
                  </div>
                ) : ( 
                  data?.status == "E"? "Expired" : "Apply Now"
                
                )}
              </button>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-6 space-y-6">
            {/* Urgent Hiring Badge */}
            {data && (
              <div
                className="border rounded-lg p-4"
                style={{ backgroundColor: "#dff3f9", borderColor: "#0784C9" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "white" }}
                  >
                    <AlertTriangle
                      className="w-4 h-4"
                      style={{ color: "#0784C9" }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2" style={{ color: "#003B70" }}>
                      Urgently hiring
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      {data.walkIn && (
                        <div
                          className="flex items-center gap-2 px-3 py-2 rounded-lg"
                          style={{ backgroundColor: "white", color: "#003B70" }}
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "#0784C9" }}
                          ></div>
                          <span className="font-medium">Walk In Available</span>
                        </div>
                      )}
                      <div
                        className="flex items-center gap-2 px-3 py-2 rounded-lg"
                        style={{ backgroundColor: "white", color: "#003B70" }}
                      >
                        <Users
                          className="w-4 h-4"
                          style={{ color: "#0784C9" }}
                        />
                        <span>
                          {data?.JobApplications.length} applicants so far
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Joining Fee Section */}
            {data?.joiningFee && (
              <div className="border border-yellow-300 rounded-lg overflow-hidden bg-yellow-50">
                <div
                  className="px-4 py-3 border-b border-yellow-200"
                  style={{ backgroundColor: "#fff3cd" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-yellow-700" />
                    </div>
                    <h3 className="text-lg font-bold text-yellow-800">
                      Pay For Job
                    </h3>
                  </div>
                </div>
                <div className="bg-white space-y-0">
                  <DetailRow
                    icon={<IndianRupee className="h-4 w-4" />}
                    label="Joining Fee Amount:"
                    value={`₹${data?.joiningFeeAmount}`}
                  />
                  <DetailRow
                    icon={<Timer className="h-4 w-4" />}
                    label="Payment Time:"
                    value={data.joiningFeeAmountTime}
                  />
                  <DetailRow
                    icon={<BookUser className="h-4 w-4" />}
                    label="Reason:"
                    value={data.joiningFeeReason}
                  />
                  <DetailRow
                    icon={<BookUser className="h-4 w-4" />}
                    label="Details:"
                    value={data.joiningFeeReasonDetail}
                  />
                </div>
              </div>
            )}

            {/* Job Role */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div
                className="px-4 py-3 border-b border-gray-200"
                style={{ backgroundColor: "#dff3f9" }}
              >
                <h3
                  className="text-lg font-bold flex items-center gap-3"
                  style={{ color: "#003B70" }}
                >
                  <Briefcase className="w-5 h-5" style={{ color: "#0784C9" }} />
                  Job Role
                </h3>
              </div>
              <div className="space-y-0">
                <DetailRow
                  icon={<MapPin className="h-4 w-4" />}
                  label="Work location:"
                  value={data?.location}
                />
                <DetailRow
                  icon={<Briefcase className="h-4 w-4" />}
                  label="Department:"
                  value={data?.jobTitle}
                />
                <DetailRow
                  icon={<BookUser className="h-4 w-4" />}
                  label="Role:"
                  value={data?.jobRoles}
                />
                <DetailRow
                  icon={<Timer className="h-4 w-4" />}
                  label="Employment type:"
                  value={data?.jobType}
                />
                <DetailRow
                  icon={<SunMoon className="h-4 w-4" />}
                  label="Shift:"
                  value={data?.nightShift}
                />
              </div>
            </div>

            {/* WalkIn Details */}
            {data?.walkIn && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div
                  className="px-4 py-3 border-b border-gray-200"
                  style={{ backgroundColor: "#dff3f9" }}
                >
                  <h3
                    className="text-lg font-bold flex items-center gap-3"
                    style={{ color: "#003B70" }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "#0784C9" }} />
                    WalkIn Details
                  </h3>
                </div>
                <div className="space-y-0">
                  <DetailRow
                    icon={<MapPin className="h-4 w-4" />}
                    label="WalkIn Address:"
                    value={data.walkInAddress}
                  />
                  <DetailRow
                    icon={<CalendarArrowUp className="h-4 w-4" />}
                    label="End Date:"
                    value={data.WalkInEndDate}
                  />
                  <DetailRow
                    icon={<Timer className="h-4 w-4" />}
                    label="Start Time:"
                    value={data.walkInStartTime}
                  />
                  <DetailRow
                    icon={<BookUser className="h-4 w-4" />}
                    label="Instructions:"
                    value={data.walkInInstruction}
                  />
                </div>
              </div>
            )}

            {/* Contact Details */}
            {data?.otherRecruiterName && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div
                  className="px-4 py-3 border-b border-gray-200"
                  style={{ backgroundColor: "#dff3f9" }}
                >
                  <h3
                    className="text-lg font-bold flex items-center gap-3"
                    style={{ color: "#003B70" }}
                  >
                    <Phone className="w-5 h-5" style={{ color: "#0784C9" }} />
                    Contact
                  </h3>
                </div>
                <div className="space-y-0">
                  <DetailRow
                    icon={<Users className="h-4 w-4" />}
                    label="Recruiter Name:"
                    value={data.otherRecruiterName}
                  />
                  <DetailRow
                    icon={<Phone className="h-4 w-4" />}
                    label="Phone Number:"
                    value={data.otherRecruiterNumber}
                  />
                  <DetailRow
                    icon={<Mail className="h-4 w-4" />}
                    label="Email:"
                    value={data.otherRecruiterEmail}
                  />
                  <DetailRow
                    icon={<Users className="h-4 w-4" />}
                    label="Candidate Type:"
                    value={data.candidateType}
                  />
                </div>
              </div>
            )}

            {/* Job Description */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div
                className="px-4 py-3 border-b border-gray-200"
                style={{ backgroundColor: "#dff3f9" }}
              >
                <h3
                  className="text-lg font-bold flex items-center gap-3"
                  style={{ color: "#003B70" }}
                >
                  <BookUser className="w-5 h-5" style={{ color: "#0784C9" }} />
                  Job Description
                </h3>
              </div>
              <div className="ql-container ql-snow   text-14 text-gray-650">
                {data ? <> <div
                  className="ql-editor  flex flex-wrap text-14 text-gray-650"
                  dangerouslySetInnerHTML={{
                    __html: showFullDescription
                      ? data?.jobDescription
                      : data?.jobDescription?.slice(0, 200) + '...',
                  }}
                />
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="text-secondary text-14 mt-2 ml-4"
                  >
                    {showFullDescription ? "Show Less" : "Show More"}
                  </button> </> : <Skeleton variant="rectangular" animation="wave" width={"100%"} height={50} sx={{ borderRadius: "10px" }} />}


              </div>

            </div>

            {/* Job Requirements */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div
                className="px-4 py-3 border-b border-gray-200"
                style={{ backgroundColor: "#dff3f9" }}
              >
                <h3
                  className="text-lg font-bold flex items-center gap-3"
                  style={{ color: "#003B70" }}
                >
                  <GraduationCap
                    className="w-5 h-5"
                    style={{ color: "#0784C9" }}
                  />
                  Job Requirements
                </h3>
              </div>
              <div className="space-y-0">
                <DetailRow
                  icon={<Timer className="h-4 w-4" />}
                  label="Experience:"
                  value={data?.experience}
                />
                <DetailRow
                  icon={<GraduationCap className="h-4 w-4" />}
                  label="Education:"
                  value={data?.education}
                />
                <DetailRow
                  icon={<Briefcase className="h-4 w-4" />}
                  label="Past Role:"
                  value={data?.jobTitle}
                />
                <DetailRow
                  icon={<Users className="h-4 w-4" />}
                  label="Gender:"
                  value={data?.gender}
                />
                <DetailRow
                  icon={<BookUser className="h-4 w-4" />}
                  label="English Level:"
                  value={data?.english}
                />
              </div>
            </div>

            {/* About Company */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div
                className="px-4 py-3 border-b border-gray-200"
                style={{ backgroundColor: "#dff3f9" }}
              >
                <h3
                  className="text-lg font-bold flex items-center gap-3"
                  style={{ color: "#003B70" }}
                >
                  <Building className="w-5 h-5" style={{ color: "#0784C9" }} />
                  About Company
                </h3>
              </div>
              {data?.Employer?.company?.companyName ? (
                <div className="p-4 space-y-3">
                  <div>
                    <h4
                      className="text-lg font-bold mb-2"
                      style={{ color: "#003B70" }}
                    >
                      {data?.Employer.company.companyName}
                    </h4>
                    {data?.Employer.company.location && 
                     <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <MapPin
                        className="w-4 h-4"
                        style={{ color: "#0784C9" }}
                      />
                      <span>{data?.Employer.company.location}</span>
                    </div>
                    }
                   
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {data?.Employer.company.about}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4">
                  <p className="text-gray-500 italic text-center py-6 text-sm">
                    No company information provided.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Applied Modal */}
      {showAppliedModal && (
        <AppliedModal onClose={() => setShowAppliedModal(false)} />
      )}
    </div>
  );
};

export default JobDetails;
