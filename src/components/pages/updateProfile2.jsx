import { useEffect, useState, useRef } from "react";
import { BadgeIndianRupee } from "lucide-react";
import MainContent from "../../components/ui/MainContent";
import { Mail, Phone, MapPin, Calendar, Timer } from "lucide-react";
import QuickLinks from "./Quicklinks";
import Skeleton from "@mui/material/Skeleton";
import UserForm from "../modals/profileUpdateModals/resumeUpload";
import { uploadProfileApi, uploadResumeApi } from "../../API/APIs";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../Redux/getData";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HomePageCandidateProfile = () => {
  const sectionRefs = {
    Resume: useRef(null),
    Employment: useRef(null),
    Education: useRef(null),
    Skills: useRef(null),
    "Basic Details": useRef(null),
  };
  const user = JSON.parse(localStorage.getItem("User"));
  const [showDrawer, setShowDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [modalName, setModalName] = useState("");
  const [resumeModal, openResmeModal] = useState(false);
  const [latestExperien, setLatestExperience] = useState(0);
  const [profileComplete, setProfileComplete] = useState(0)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const { employee, loading, error } = useSelector(
    (state) => state.getDataReducer
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowDrawer(false); // auto-close drawer on large screen
        setIsMobile(false);
      }
      if (window.innerWidth < 768) {
        setIsMobile(true); // auto-close drawer on large screen
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (employee) {
      const timeout = setTimeout(() => {
        setShowContent(true);
      }, 1500); // 1.5 seconds delay

      return () => clearTimeout(timeout); // cleanup
    }
  }, [employee]);

  useEffect(() => {
    if (employee && employee.length > 0) {
      const latestExperience = employee.reduce((latest, current) => {
        const latestDate = new Date(latest.startDate);
        const currentDate = new Date(current.startDate);
        return currentDate > latestDate ? current : latest;
      });

      setLatestExperience(latestExperience);
    }

    handleProfileCompleted()
  }, [employee]);

  const handleScrollTo = (label) => {
    console.log(label);
    const ref = sectionRefs[label];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const hanleModalOpen = (link) => {
    if (link.action == "Update") {
      openResmeModal(true);
    }
  };



  const handleProfileCompleted = () =>{
    let profileComp= 0; 
    if(employee?.EmployeeExperiences?.length > 0){
      profileComp += 10
    }
    if(employee?.EmployeeEducations?.length > 0){
      profileComp += 10
    }
    if(employee?.TotalExperience){
      profileComp += 10
    }
    if(employee?.salary){
      profileComp += 10
    }
    if(employee?.skills){
      profileComp += 10
    }
    if(employee?.profileImage){
      profileComp += 10
    }
    if(employee?.otherLanguages){
     profileComp += 10
    }
    if(employee?.resumeURL){
     profileComp += 10
    }
    if(employee?.preferredJobCity){
      profileComp += 2
    }
    if(employee?.preferredJobRoles){
      profileComp += 2
    }
    if(employee?.preferredLocationTypes){
      profileComp += 2
    }
    if(employee?.preferredShifts){
      profileComp += 2
    }
    if(employee?.prefferedEmploymentTypes){
      profileComp += 2
    }
    if(employee?.currentLocation){
     profileComp += 10
    }

    setProfileComplete(profileComp)
  }

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
    <div className="min-h-screen lg:w-[80vw] md:w-full bg-gradient-to-br from-[#dff3f9] to-white">
      {/* Profile Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto p-4">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            {/* Profile Image */}
            <div
              onClick={() => setModalName("editImage")}
              className="relative cursor-pointer group"
            >
              <div className="w-[6em] h-[6em]">
              <CircularProgressbarWithChildren
                value={profileComplete}
                strokeWidth={5}
                styles={buildStyles({
                  pathColor: profileComplete <=25? "red": profileComplete>=80? "green":"secondary",
                  trailColor: "rgba(151, 143, 143, 0)",
                })}
              >
                <div className="w-[88%] h-[88%] rounded-full border-2 border-[#0784C9] overflow-hidden bg-gradient-to-br from-[#dff3f9] to-[#0784C9] flex items-center justify-center">
                  {employee && showContent ? (
                    <img
                      src={employee?.profileImage || "/placeholder.svg"}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Skeleton
                      variant="circular"
                      width={76}
                      height={76}
                      className="bg-gray-200"
                    />
                  )}
                </div>
              </CircularProgressbarWithChildren>
              </div>

              {/* <div
                onClick={() => setModalName("editImage")}
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all duration-200 flex items-center justify-center"
              >
                <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Edit
                </span>
              </div> */}
              <div className="text-primary font-bold text-xs flex md:align-center justify-start ml-10 md:ml-0 md:justify-center ">{profileComplete}%</div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-2">
              <div>
                {employee && showContent ? (
                  <h1 className="text-lg font-semibold text-[#1e40af]">
                    {employee?.fullName}
                  </h1>
                ) : (
                  <Skeleton width={200} height={20} />
                )}
                {employee && showContent ? (
                  <p className="text-sm font-medium text-[#0784C9]">
                    {employee?.EmployeeExperiences[0]?.jobTitle}
                  </p>
                ) : (
                  <Skeleton width={150} height={16} />
                )}

                {employee && showContent ? (
                  <p className="text-xs text-gray-600">
                    at {employee?.EmployeeExperiences[0]?.companyName}
                  </p>
                ) : (
                  <Skeleton width={120} height={14} />
                )}
              </div>

              {/* Last Updated */}
              <p className="text-xs text-gray-500">
                Profile last updated ·{" "}
                {employee?.updatedAt.split("T")[0] && showContent ? (
                  employee?.updatedAt.split("T")[0]
                ) : (
                  <Skeleton width={80} height={12} className="inline-block" />
                )}
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 bg-[#dff3f9] rounded-lg p-3">
              <MapPin className="w-4 h-4 text-[#0784C9] flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#1e40af] mb-0.5">
                  Location
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {employee && showContent ? (
                    employee.currentLocation ? (
                      employee.currentLocation
                    ) : (
                      "Location not updated"
                    )
                  ) : (
                    <Skeleton width={100} height={12} />
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#dff3f9] rounded-lg p-3">
              <Phone className="w-4 h-4 text-[#0784C9] flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#1e40af] mb-0.5">
                  Phone
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {user.phone && showContent ? (
                    user.phone
                  ) : (
                    <Skeleton width={90} height={12} />
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#dff3f9] rounded-lg p-3">
              <Timer className="w-4 h-4 text-[#0784C9] flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#1e40af] mb-0.5">
                  Experience
                </p>
                <p className="text-xs text-gray-600">
                  {employee && showContent ? (
                    employee?.TotalExperience?.years ? (
                      `${employee?.TotalExperience?.years} years ${employee?.TotalExperience?.months} months`
                    ) : (
                      "Experience not provided"
                    )
                  ) : (
                    <Skeleton width={120} height={12} />
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#dff3f9] rounded-lg p-3">
              <Mail className="w-4 h-4 text-[#0784C9] flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#1e40af] mb-0.5">
                  Email
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {employee && showContent ? (
                    employee.email
                  ) : (
                    <Skeleton width={110} height={12} />
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#dff3f9] rounded-lg p-3">
              <BadgeIndianRupee className="w-4 h-4 text-[#0784C9] flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#1e40af] mb-0.5">
                  Salary
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {employee && showContent ? (
                    employee.salary ? (
                      `₹ ${employee.salary}`
                    ) : (
                      "Salary not Provided"
                    )
                  ) : (
                    <Skeleton width={80} height={12} />
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#dff3f9] rounded-lg p-3">
              <Calendar className="w-4 h-4 text-[#0784C9] flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#1e40af] mb-0.5">
                  Notice Period
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {employee && showContent ? (
                    employee?.EmployeeExperiences[latestExperien]
                      ?.noticePeriod ? (
                      employee?.EmployeeExperiences[latestExperien]
                        ?.noticePeriod
                    ) : (
                      "N/A"
                    )
                  ) : (
                    <Skeleton width={60} height={12} />
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body Section */}
      <div className="max-w-6xl mx-auto p-4">
        {isMobile ? (
          <div className="space-y-4">
            <div className="flex justify-center">
              <button
                onClick={() => setShowDrawer(true)}
                className="bg-gradient-to-r from-[#1e40af] to-[#0784C9] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                Quick Links
              </button>
            </div>
            <div className="w-full">
              {employee && (
                <MainContent
                  employee={employee}
                  showContent={showContent}
                  sectionRefs={sectionRefs}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-6">
            {/* Left: Quick Links of width 1/3 */}
            <div className="w-1/3">
              <QuickLinks
                onLinkClick={handleScrollTo}
                hanleModalOpen={hanleModalOpen}
              />
            </div>

            {/* Right Main Content of width 2/3*/}
            <div className="w-2/3">
              {employee && (
                <MainContent
                  employee={employee}
                  showContent={showContent}
                  sectionRefs={sectionRefs}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Drawer from Bottom for Mobile */}
      {showDrawer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={() => setShowDrawer(false)}
        >
          <div
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl p-6 max-h-[70vh] overflow-y-auto transform transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside drawer
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#1e40af]">
                Quick Links
              </h3>
              <button
                onClick={() => setShowDrawer(false)}
                className="text-sm text-[#0784C9] font-medium px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
            <div className="space-y-3">
              {[
                { label: "Resume", action: "Update" },
                { label: "Employment" },
                { label: "Education" },
                { label: "Skills" },
                { label: "Basic Details" },
              ].map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-[#dff3f9] rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                  onClick={() => {
                    const ref = sectionRefs[link.label];
                    if (ref?.current) {
                      ref.current.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                      setTimeout(() => setShowDrawer(false), 300);
                      setShowDrawer(false);
                    }
                  }}
                >
                  <span className="text-sm font-medium text-[#1e40af]">
                    {link.label}
                  </span>
                  {link.action && (
                    <button
                      className="bg-[#0784C9] text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-[#1e40af] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        hanleModalOpen(link);
                      }}
                    >
                      {link.action}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {resumeModal && (
        <UserForm
          open={resumeModal}
          onClose={() => openResmeModal(!resumeModal)}
          metaData={{
            field: "resume",
            Api: uploadResumeApi,
            default: employee?.resumeURL,
          }}
        />
      )}

      {/* Profile Image Modal */}
      {modalName === "editImage" && (
        <UserForm
          open={modalName === "editImage"}
          onClose={() => setModalName("")}
          metaData={{
            field: "profileImage",
            Api: uploadProfileApi,
            default: employee?.profileImage,
          }}
        />
      )}
    </div>
  );
};

export default HomePageCandidateProfile;
