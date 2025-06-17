import React, { useState } from "react";
import { Building2, Pencil, GraduationCap, PencilIcon } from "lucide-react";
import UpdateProfileModal from "../modals/profileUpdateModals/updateProfileModal";
import {
  addEmpExp,
  createEducation,
  deleteEducationfunc,
  deleteExperiencefunc,
  editEducation,
  employeeExp,
  getCertificationSuggestions,
  getCities,
  getEducationSuggestions,
  getSkillSuggestions,
  updateProfileFunc,
  updateSkils,
} from "../../API/ApiFunctions";
import EditExperienceModal from "../modals/profileUpdateModals/experienceModal";
import UserForm from "../modals/profileUpdateModals/resumeUpload";
import { uploadResumeApi } from "../../API/APIs";
import Skeleton from "@mui/material/Skeleton";
import { Delete, PictureAsPdf } from "@mui/icons-material";
import { showSuccessToast } from "./toast";
import { showErrorToast } from "./toast";

const graduateDegrees = [
  "B.A.",
  "B.Sc",
  "B.Com",
  "BBA",
  "BCA",
  "B.Tech",
  "B.E.",
  "B.Arch",
  "B.Pharm",
  "LLB",
  "B.Des",
  "BFA",
  "B.Ed",
  "BHM",
  "B.Voc",
  "B.Lib",
  "BMS",
  "BASLP",
  "BPT",
  "BDS",
  "B.Sc (Nursing)",
  "B.A. (Hons)",
  "B.Com (Hons)",
  "B.Sc (Hons)",
];

const postGraduateDegrees = [
  "M.A.",
  "M.Sc",
  "M.Com",
  "MBA",
  "MCA",
  "M.Tech",
  "M.E.",
  "LLM",
  "M.Arch",
  "M.Pharm",
  "M.Des",
  "MFA",
  "M.Ed",
  "MHM",
  "M.Lib",
  "M.P.Ed",
  "MSW",
  "M.Phil",
  "M.Voc",
  "MDS",
  "M.Sc (Nursing)",
  "PGDM",
  "PGDCA",
  "PG Diploma",
];

export default function MainContent({ employee, showContent, sectionRefs }) {
  const [modalName, setModalName] = useState(null);
  const [experienceIndex, setExperienceIndex] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [prefferedCitySuggestions, setPrefferedCitySuggestions] = useState([]);
  const [specializationSuggestions, setSpecializationSuggestions] = useState([]);
  const [educationvalue, setEducationValue] = useState(null);
  const [skillsSuggestions, setSkillsSuggestions] = useState([]);
  const [certificationSuggestions, setCertificationSuggestions] = useState([])

    const inputChange = async (value) => {

    const response = await getCities(value);
    if (response) {
      setPrefferedCitySuggestions(response.data)
    }
  }

   const handleCertificationSuggestions = async (value) =>{

    const response = await getCertificationSuggestions(value)
    if(response){
      
      setCertificationSuggestions(response.data.data)
    }else{
      showErrorToast("Could not fetch suggestions")
    }
  }


    const inputEducationChange = async (value) => {
    const response = await getEducationSuggestions(value);
    if (response) {
      console.log(response.data)
      setSpecializationSuggestions(response.data)
      setEducationValue(value)
    }
  }

   const handleEditEducation = (edu) => {
    setSelectedEducation(edu);
    setModalName("education");
  };

  const inputSkillsChange = async(value) =>{
    console.log(value)
    const response = await getSkillSuggestions(value);
    if(response){
      setSkillsSuggestions(response.data.data);

    }else{
      showErrorToast("Couldn't fetch suggestions")
    }
  }

  const user = JSON.parse(localStorage.getItem("User"));

  const deleteEducation = async (id) => {
    const response = await deleteEducationfunc(id);
    if (response) {
      showSuccessToast("successfully Deleted")
      isDataChange()
    } else {
      showErrorToast("Couldn't Delete")
    }
  }

  const deleteExperience = async (id) => {
    const response = await deleteExperiencefunc(id);
    if (response) {
      showSuccessToast("successfully Deleted")
      isDataChange()
    } else {
      showErrorToast("Couldn't Delete")
    }
  }


  function SkeletonCard() {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-pulse">
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          <div className="flex gap-2">
            <div className="h-6 bg-gray-200 rounded-full w-16"></div>
            <div className="h-6 bg-gray-200 rounded-full w-20"></div>
          </div>
          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    );
  }

  function SkeletonEducation() {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-pulse">
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 bg-gradient-to-br from-[#dff3f9] to-white min-h-screen">
      {/* Work Experience Section */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className=" px-6 py-4" style={{ backgroundColor: "#0784C9" }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-white" />
              <h2 className="text-lg font-semibold text-white"  ref={sectionRefs.Employment}>
                Work Experience
              </h2>
            </div>
            <button
              onClick={() => {
                setModalName("editExperience");
                setExperienceIndex(null);
              }}
              className="bg-white text-[#0784C9] px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              + Add
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {employee && showContent ? (
            <>
              {employee.EmployeeExperiences?.map((experienc, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-r from-[#dff3f9] to-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow duration-200"
                >
                  <button
                    onClick={() => {
                      setModalName("editExperience");
                      setExperienceIndex(index);
                    }}
                    className="absolute top-3 right-12 text-[#0784C9] hover:text-[#1e40af] transition-colors p-1.5 rounded-md hover:bg-white"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      deleteExperience(experienc.id);
                    }}
                    className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors p-1.5 rounded-md hover:bg-white"
                  >
                    <Delete className="w-3.5 h-3.5" />
                  </button>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-base font-semibold text-[#1e40af] leading-tight">
                        {experienc.companyName}
                      </h3>
                      <p className="text-sm font-medium text-[#0784C9] mt-0.5">
                        {experienc.jobTitle}
                      </p>
                    </div>

                    {/* Job Roles */}
                    <div className="space-y-1.5">
                      <p className="font-medium text-[#1e40af] text-xs">
                        Job Roles:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {(() => {
                          let roles = experienc?.jobRole;
                          try {
                            if (typeof roles === "string") {
                              roles = JSON.parse(roles);
                            }
                          } catch (err) {
                            roles = [roles];
                          }
                          if (!Array.isArray(roles)) {
                            roles = [roles];
                          }
                          return roles.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-[#0784C9] text-white px-2 py-0.5 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ));
                        })()}
                      </div>
                    </div>

                    {/* Industry */}
                    {experienc?.industry && (
                      <div className="space-y-0.5">
                        <p className="font-medium text-[#1e40af] text-xs">
                          Industry:
                        </p>
                        <p className="text-gray-600 text-xs">
                          {experienc.industry}
                        </p>
                      </div>
                    )}

                    {/* Description */}
                    {experienc?.description && (
                      <div className="space-y-0.5">
                        <p className="font-medium text-[#1e40af] text-xs">
                          Description:
                        </p>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {experienc.description}
                        </p>
                      </div>
                    )}

                    {/* Skills */}
                    {experienc?.skillsUsed && (
                      <div className="space-y-1.5">
                        <p className="font-medium text-[#1e40af] text-xs">
                          Skills:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {(Array.isArray(experienc.skillsUsed)
                            ? experienc.skillsUsed
                            : JSON.parse(experienc.skillsUsed)
                          )?.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-white border border-[#0784C9] text-[#0784C9] px-2 py-0.5 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Dates and Employment Type */}
                    {experienc.startDate && (
                      <div className="space-y-0.5">
                        <p className="font-medium text-[#1e40af] text-xs">
                          Duration:
                        </p>
                        <div className="text-xs text-gray-600">
                          <span className="font-medium">
                            {experienc.startDate} -{" "}
                            {employee?.EmployeeExperiences[0].endDate
                              ? employee?.EmployeeExperiences[0].endDate
                              : "Present"}
                          </span>
                          {experienc.employmentType && (
                            <span className="ml-2 bg-[#dff3f9] text-[#1e40af] px-2 py-0.5 rounded text-xs font-medium">
                              {experienc.employmentType}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <SkeletonCard />
          )}

          {/* Experience Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
            <div className="space-y-1">
              <p className="font-medium text-[#1e40af] text-sm">
                Total Years of experience:
              </p>
              {employee?.TotalExperience?.years ? (
                <button
                  onClick={() => setModalName("yearExperience")}
                  className="text-gray-600 hover:text-[#0784C9] transition-colors text-sm"
                >
                  {employee && showContent ? (
                    `${employee?.TotalExperience?.years} years and ${employee?.TotalExperience?.months} months`
                  ) : (
                    <Skeleton width={200} />
                  )}
                </button>
              ) : (
                <button
                  onClick={() => setModalName("yearExperience")}
                  className="text-[#0784C9] hover:text-[#1e40af] transition-colors text-sm"
                >
                  +Add
                </button>
              )}
            </div>

            <div className="space-y-1">
              <p className="font-medium text-[#1e40af] text-sm">
                Current monthly salary:
              </p>
              {employee?.salary ? (
                <button
                  onClick={() => setModalName("salary")}
                  className="text-gray-600 hover:text-[#0784C9] transition-colors text-sm"
                >
                  {employee && showContent ? (
                    employee.salary
                  ) : (
                    <Skeleton width={150} />
                  )}
                </button>
              ) : (
                <button
                  onClick={() => setModalName("salary")}
                  className="text-[#0784C9] hover:text-[#1e40af] transition-colors text-sm"
                >
                  +Add
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className=" px-6 py-4" style={{ backgroundColor: "#0784C9" }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2" ref={sectionRefs.Education}>
              <GraduationCap className="w-5 h-5 text-white" />
              <h2 className="text-lg font-semibold text-white">Education</h2>
            </div>
            <button
              onClick={() => setModalName("education")}
              className="bg-white text-[#0784C9] px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              + Add
            </button>
          </div>
        </div>

        <div className="p-6">
          {employee && showContent ? (
            <>
              {employee?.EmployeeEducations?.length > 0 ? (
                <div className="space-y-4">
                  {employee?.EmployeeEducations?.map((edu, idx) => (
                    <div
                      key={idx}
                      className="relative bg-gradient-to-r from-[#dff3f9] to-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="absolute left-4 top-6 w-2 h-2 bg-[#0784C9] rounded-full"></div>

                      <div className="ml-6 space-y-2">
                        <h3 className="text-sm font-semibold text-[#1e40af] leading-tight">
                          {edu.degree ? edu.degree : ""}{" "}
                          {edu.specialization ? `(${edu.specialization})` : ""}
                        </h3>
                        <p className="text-[#0784C9] text-xs font-medium">
                          {edu.instituteName} -{" "}
                          {edu.qualification
                            .replace(/_/g, " ")
                            .replace("Categories", "")}
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="text-gray-600">
                            Batch {edu.startDate} - {edu.endDate}
                          </span>
                          <span className="bg-[#1e40af] text-white px-2 py-0.5 rounded-full text-xs font-medium">
                            {edu.studyMode === "f" ? (
                              "Full-Time"
                            ) : (
                              <>
                                {edu.studyMode === "p"
                                  ? "Part Time"
                                  : "Correspondence"}
                              </>
                            )}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleEditEducation(edu)}
                        className="absolute top-3 right-12 text-[#0784C9] hover:text-[#1e40af] transition-colors p-1.5 rounded-md hover:bg-white"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => deleteEducation(edu.id)}
                        className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors p-1.5 rounded-md hover:bg-white"
                      >
                        <Delete className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <button
                  onClick={() => setModalName("education")}
                  className="w-full bg-[#dff3f9] text-[#1e40af] p-4 border-2 border-dashed border-[#0784C9] rounded-lg hover:bg-blue-50 transition-colors text-center text-sm"
                >
                  No Education added
                </button>
              )}
            </>
          ) : (
            <SkeletonEducation />
          )}
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className=" px-6 py-4" style={{ backgroundColor: "#0784C9" }}>
          <div className="flex items-center justify-between" ref={sectionRefs.Skills}>
            <h2 className="text-lg font-semibold text-white">Skills</h2>
            <button
              onClick={() => setModalName("skills")}
              className="text-white hover:text-gray-200 transition-colors p-1.5 rounded-md hover:bg-white/10"
            >
              <Pencil className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {employee && showContent ? (
              <>
                {employee?.skills?.length > 0 ? (
                  (Array.isArray(employee?.skills)
                    ? employee?.skills
                    : JSON.parse(employee?.skills)
                  )?.map((skill, idx) => (
                    <span
                      key={idx}
                      className=" text-white px-3 py-1 rounded-full text-xs font-medium hover:shadow-md transition-shadow"
                      style={{ backgroundColor: "#0784C9" }}
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500 italic text-sm">
                    No skills listed yet.
                  </p>
                )}
              </>
            ) : (
              Array.from({ length: 3 }).map((_, idx) => (
                <Skeleton
                  key={idx}
                  width={80}
                  height={28}
                  className="rounded-full"
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className=" px-6 py-4" style={{ backgroundColor: "#0784C9" }}>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Certifications</h2>
            <button
              onClick={() => setModalName("certification")}
              className="bg-white text-[#0784C9] px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              + Add
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-2">
            {employee && showContent ? (
              <>
                {employee?.certification &&
                  JSON.parse(employee.certification).map(
                    (certificate, index) => (
                      <div
                        key={index}
                        className="bg-[#dff3f9] border border-[#0784C9] rounded-lg p-3"
                      >
                        <p className="text-[#1e40af] font-medium text-sm">
                          {certificate}
                        </p>
                      </div>
                    ),
                  )}
              </>
            ) : (
              Array.from({ length: 3 }).map((_, idx) => (
                <Skeleton
                  key={idx}
                  width="100%"
                  height={40}
                  className="rounded-lg"
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Language Known Section */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className=" px-6 py-4" style={{ backgroundColor: "#0784C9" }}>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Language Known</h2>
            <button
              onClick={() => setModalName("languageKnown")}
              className="text-white hover:text-gray-200 transition-colors p-1.5 rounded-md hover:bg-white/10"
            >
              <Pencil className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-3">
          {employee && showContent ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[#1e40af] text-sm">
                  English:
                </span>
                <span className="bg-[#0784C9] text-white px-2 py-0.5 rounded-full text-xs font-medium">
                  {employee.englishProficiency}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {employee?.otherLanguages &&
                  Array.isArray(JSON.parse(employee.otherLanguages)) &&
                  JSON.parse(employee.otherLanguages).map((language, idx) => (
                    <span
                      key={idx}
                      className="bg-[#dff3f9] border border-[#0784C9] text-[#1e40af] px-2 py-0.5 rounded-full text-xs font-medium"
                    >
                      {language}
                    </span>
                  ))}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Skeleton width={150} height={20} />
              <div className="flex gap-1.5">
                {Array.from({ length: 2 }).map((_, idx) => (
                  <Skeleton
                    key={idx}
                    width={60}
                    height={20}
                    className="rounded-full"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Resume Section */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className=" px-6 py-4" style={{ backgroundColor: "#0784C9" }}>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white"  ref={sectionRefs.Resume}>Resume</h2>
            <button
              onClick={() => setModalName("editResume")}
              className="text-white hover:text-gray-200 transition-colors p-1.5 rounded-md hover:bg-white/10"
            >
              <PencilIcon size={16} />
            </button>
          </div>
        </div>

        <div className="p-6">
          {employee?.resumeURL ? (
            <div className="bg-[#dff3f9] rounded-lg p-4 border border-[#0784C9]">
              <button
                onClick={() => window.open(employee?.resumeURL, "_blank")}
                className="flex items-center gap-3 w-full text-left hover:opacity-80 transition-opacity"
              >
                <PictureAsPdf
                  className="text-[#0784C9]"
                  style={{ fontSize: "24px" }}
                />
                <div>
                  <p className="font-medium text-[#1e40af] text-sm">
                    {employee?.resumeURL.split("/").pop()}
                  </p>
                  <p className="text-gray-600 text-xs">
                    Uploaded on {employee?.updatedAt.split("T")[0]}
                  </p>
                </div>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setModalName("editResume")}
              className="w-full bg-[#dff3f9] border-2 border-dashed border-[#0784C9] rounded-lg p-6 hover:bg-blue-50 transition-colors text-center"
            >
              <div className="space-y-1">
                <p className="font-medium text-[#1e40af] text-sm">
                  Update resume
                </p>
                <p className="text-gray-600 text-xs">
                  Supported Formats: doc, docx, rtf, pdf, upto 2 MB
                </p>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Other Details Section */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className=" px-6 py-4" style={{ backgroundColor: "#0784C9" }}>
          <div>
            <h2 className="text-lg font-semibold text-white">Other details</h2>
            <p className="text-blue-100 text-xs mt-0.5">Only Visible to HRs</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Preferred Job Roles */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-[#1e40af]">
                Preferred Job Roles
              </h3>
              <button
                onClick={() => setModalName("preferredJobs")}
                className="text-[#0784C9] hover:text-[#1e40af] transition-colors p-1.5 rounded-md hover:bg-gray-50"
              >
                <PencilIcon size={14} />
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {employee && showContent ? (
                <>
                  {employee?.preferredJobRoles &&
                    (Array.isArray(employee.preferredJobRoles)
                      ? employee.preferredJobRoles
                      : JSON.parse(employee.preferredJobRoles)
                    )?.map((role, index) => (
                      <span
                        key={index}
                        className="bg-[#0784C9] text-white px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {role}
                      </span>
                    ))}
                </>
              ) : (
                Array.from({ length: 3 }).map((_, idx) => (
                  <Skeleton
                    key={idx}
                    width={100}
                    height={24}
                    className="rounded-full"
                  />
                ))
              )}
            </div>
          </div>

          {/* Preferred Job City */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-[#1e40af]">
                Preferred Job City
              </h3>
              <button
                onClick={() => setModalName("preferredJobCity")}
                className="text-[#0784C9] hover:text-[#1e40af] transition-colors p-1.5 rounded-md hover:bg-gray-50"
              >
                <PencilIcon size={14} />
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {employee && showContent
                ? (Array.isArray(employee?.preferredJobCity)
                    ? employee?.preferredJobCity
                    : JSON.parse(employee?.preferredJobCity)
                  )?.map((city, index) => (
                    <span
                      key={index}
                      className="bg-[#dff3f9] border border-[#0784C9] text-[#1e40af] px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {city}
                    </span>
                  ))
                : Array.from({ length: 3 }).map((_, idx) => (
                    <Skeleton
                      key={idx}
                      width={80}
                      height={24}
                      className="rounded-full"
                    />
                  ))}
            </div>
          </div>

          {/* Job Preference */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-[#1e40af]">
                Job Preference
              </h3>
              <button
                onClick={() => setModalName("jobPreference")}
                className="text-[#0784C9] hover:text-[#1e40af] transition-colors p-1.5 rounded-md hover:bg-gray-50"
              >
                <PencilIcon size={14} />
              </button>
            </div>
            <div className="space-y-2">
              {employee && showContent ? (
                <div className="flex flex-wrap gap-1.5">
                  {employee?.prefferedEmploymentTypes &&
                    Array.isArray(
                      JSON.parse(employee.prefferedEmploymentTypes),
                    ) &&
                    JSON.parse(employee.prefferedEmploymentTypes).map(
                      (role, index) => (
                        <span
                          key={index}
                          className="bg-[#1e40af] text-white px-2 py-0.5 rounded-full text-xs font-medium"
                        >
                          {role}
                        </span>
                      ),
                    )}

                  {employee?.preferredShifts &&
                    Array.isArray(JSON.parse(employee.preferredShifts)) &&
                    JSON.parse(employee.preferredShifts).map((role, index) => (
                      <span
                        key={index}
                        className="bg-[#0784C9] text-white px-2 py-0.5 rounded-full text-xs font-medium"
                      >
                        {role}
                      </span>
                    ))}

                  {employee?.preferredLocationTypes &&
                    Array.isArray(
                      JSON.parse(employee.preferredLocationTypes),
                    ) &&
                    JSON.parse(employee.preferredLocationTypes).map(
                      (role, index) => (
                        <span
                          key={index}
                          className="bg-[#dff3f9] border border-[#0784C9] text-[#1e40af] px-2 py-0.5 rounded-full text-xs font-medium"
                        >
                          {role}
                        </span>
                      ),
                    )}
                </div>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <Skeleton
                      key={idx}
                      width={70}
                      height={20}
                      className="rounded-full"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Basic Details */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-[#1e40af]" ref={sectionRefs["Basic Details"]}>
                Basic Details
              </h3>
              <button
                onClick={() => setModalName("basicDetails")}
                className="text-[#0784C9] hover:text-[#1e40af] transition-colors p-1.5 rounded-md hover:bg-gray-50"
              >
                <PencilIcon size={14} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {employee && showContent ? (
                <>
                  <div className="bg-[#dff3f9] rounded-lg p-3">
                    <p className="font-medium text-[#1e40af] text-xs">
                      Full Name
                    </p>
                    <p className="text-gray-700 mt-0.5 text-sm">
                      {employee.fullName}
                    </p>
                  </div>
                  <div className="bg-[#dff3f9] rounded-lg p-3">
                    <p className="font-medium text-[#1e40af] text-xs">Email</p>
                    <p className="text-gray-700 mt-0.5 text-sm">
                      {employee.email}
                    </p>
                  </div>
                  {user && (
                    <div className="bg-[#dff3f9] rounded-lg p-3">
                      <p className="font-medium text-[#1e40af] text-xs">
                        Phone
                      </p>
                      <p className="text-gray-700 mt-0.5 text-sm">
                        {user.phone}
                      </p>
                    </div>
                  )}
                  <div className="bg-[#dff3f9] rounded-lg p-3">
                    <p className="font-medium text-[#1e40af] text-xs">Gender</p>
                    <p className="text-gray-700 mt-0.5 text-sm">
                      {employee.gender}
                    </p>
                  </div>
                  <div className="bg-[#dff3f9] rounded-lg p-3">
                    <p className="font-medium text-[#1e40af] text-xs">
                      Date of Birth
                    </p>
                    <p className="text-gray-700 mt-0.5 text-sm">
                      {employee.dob}
                    </p>
                  </div>
                  {employee?.currentLocation && (
                    <div className="bg-[#dff3f9] rounded-lg p-3">
                      <p className="font-medium text-[#1e40af] text-xs">
                        Current Location
                      </p>
                      <p className="text-gray-700 mt-0.5 text-sm">
                        {employee.currentLocation}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 rounded-lg p-3 animate-pulse"
                  >
                    <Skeleton width="60%" height={12} />
                    <Skeleton width="80%" height={16} className="mt-1" />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

       {modalName === "editResume" && (
        <UserForm
          open={modalName === "editResume"}
          label={"Upload Resume"}
          onClose={() => setModalName("")}
          metaData={{
            field: "resume",
            Api: uploadResumeApi,
            default: employee?.resumeURL,
          }}
        />
      )}

      {modalName === "skills" && (
        <UpdateProfileModal
          open={modalName === "skills"}
          onClose={() => setModalName("")}
          fields={{
            skills: Array.isArray(employee?.skills)
              ? employee?.skills
              : (employee?.skills && JSON.parse(employee?.skills)) || [],
          }}
          label={{ skills: "Add Skills" }}
          type={{
            skills: "multi",
          }}
          suggestions={{
            skills: skillsSuggestions
          }}
          metaData={{
            title: "  Edit skills",
            onSubmitFunc: updateSkils,
            id: null,
            inputChange: inputSkillsChange
          }}
        />
      )}



      {modalName === "editExperience" && (
        <EditExperienceModal
          Open={modalName === "editExperience"}
          close={() => setModalName("")}
          data={employee?.EmployeeExperiences[experienceIndex]}
          setInitials={() => setExperienceIndex(null)}
          suggestions={{
            skills: skillsSuggestions
          }}
          metaData={
            {
              onSubmitFunc: (addEmpExp),
              id: employee?.EmployeeExperiences[experienceIndex] ? employee?.EmployeeExperiences[experienceIndex]?.id : null,
              inputChange: inputSkillsChange
            }
          }
        />
      )}

      {modalName === "salary" && (
        <UpdateProfileModal
          open={modalName === "salary"}
          onClose={() => setModalName("")}
          fields={{
            salary: employee?.salary || "",
          }}
          label={{ salary: "Enter your Current Salary" }}
          type={{
            salary: "number",
          }}
          metaData={{
            title: "Edit Current Monthly Salary",
            onSubmitFunc: updateProfileFunc,
            id: null,
          }}
        />
      )}

      {modalName === "preferredJobs" && (
        <UpdateProfileModal
          open={modalName === "preferredJobs"}
          onClose={() => setModalName("")}
          fields={{
            preferredJobRoles: Array.isArray(employee?.preferredJobRoles)
              ? employee?.preferredJobRoles
              : (employee?.preferredJobRoles &&
                JSON.parse(employee?.preferredJobRoles)) ||
              [],
          }}
          label={{ preferredJobRoles: "Add Your Job Preference" }}
          type={{
            preferredJobRoles: "multi",
          }}
          suggestions={{
            preferredJobRoles: [
              "Software Backend Development",
              "Website Development",
              "DevOps",
              "UI / UX Design",
            ],
          }}
          limits={{
            preferredJobs: 5,
          }}
          metaData={{
            title: "preferredJobs",
            onSubmitFunc: updateProfileFunc,
            id: null,
          }}
        />
      )}

      {modalName === "preferredJobCity" && (
        <UpdateProfileModal
          open={modalName === "preferredJobCity"}
          onClose={() => setModalName("")}
          fields={{
            preferredJobCity: Array.isArray(employee?.preferredJobCity)
              ? employee?.preferredJobCity
              : (employee?.preferredJobCity &&
                JSON.parse(employee?.preferredJobCity)) ||
              [],
          }}
          label={{
            preferredJobCity: "Add Your Prefered Job City",
          }}
          type={{
            preferredJobCity: "multi",
          }}
          suggestions={{
            preferredJobCity: prefferedCitySuggestions,
          }} // optional: you can provide city name suggestions if needed
          limits={{ preferredJobCity: 3 }}
          metaData={{
            title: "Preferred job city",
            onSubmitFunc: updateProfileFunc,
            id: null,
            inputChange: inputChange
          }} // to enforce a max of 3 cities
        />
      )}

      {modalName === "languageKnown" && (
        <UpdateProfileModal
          open={modalName === "languageKnown"}
          onClose={() => setModalName("")}
          fields={{
            englishProficiency: employee?.englishProficiency || "",
            otherLanguages: Array.isArray(employee?.otherLanguages)
              ? employee?.otherLanguages
              : (employee?.otherLanguages &&
                JSON.parse(employee?.otherLanguages)) ||
              [],
          }}
          label={{
            englishProficiency: "What is your englsih speaking level",
            otherLanguages: "Select other language",
          }}
          type={{
            englishProficiency: "radio",
            otherLanguages: "multi",
          }}
          suggestions={{
            englishProficiency: [
              { Basic: "Basic" },
              { Intermediate: "Intermediate" },
              { Advanced: "Advanced" },
            ],
            otherLanguages: ["Assamese", "Bengali", "Bodo", "Dogri", "Gujarati", "Hindi", "Kannada", "Kashmiri", "Konkani", "Maithili",
              "Malayalam", "Manipuri", "Marathi", "Nepali", "Odia", "Punjabi", "Sanskrit", "Santali", "Sindhi", "Tamil", "Telugu", "Urdu"],
          }}
          metaData={{
            title: "language Known",
            onSubmitFunc: updateProfileFunc,
            id: null,
          }}
        />
      )}

      {modalName === "jobPreference" && (
        <UpdateProfileModal
          open={modalName === "jobPreference"}
          onClose={() => setModalName("")}
          fields={{
            prefferedEmploymentTypes: Array.isArray(
              employee?.prefferedEmploymentTypes
            )
              ? employee?.prefferedEmploymentTypes
              : (employee?.prefferedEmploymentTypes &&
                JSON.parse(employee?.prefferedEmploymentTypes)) ||
              [],
            preferredLocationTypes: Array.isArray(
              employee?.preferredLocationTypes
            )
              ? employee?.preferredLocationTypes
              : (employee?.preferredLocationTypes &&
                JSON.parse(employee?.preferredLocationTypes)) ||
              [],
            preferredShifts: Array.isArray(employee?.preferredShifts)
              ? employee?.preferredShifts
              : (employee?.preferredShifts &&
                JSON.parse(employee?.preferredShifts)) ||
              [],
          }}
          label={{
            prefferedEmploymentTypes: "Preferred employement type",
            preferredLocationTypes: "Preferred Work Place",
            preferredShifts: "Preferred Work Shift",
          }}
          type={{
            prefferedEmploymentTypes: "multi",
            preferredLocationTypes: "multi",
            preferredShifts: "multi",
          }}
          suggestions={{
            prefferedEmploymentTypes: [
              "Part Time",
              "Full Time",
              "Internships",
              "Contract",
            ],
            preferredLocationTypes: [
              "onSite",
              "remote",
              "hybrid",
              "field-work",
            ],
            preferredShifts: ["Night Shift", "Day Shift"],
          }}
          metaData={{
            title: "jobPreference",
            onSubmitFunc: updateProfileFunc,
            id: null,
          }}
        />
      )}

      {modalName === "yearExperience" && (
        <UpdateProfileModal
          open={modalName === "yearExperience"}
          onClose={() => setModalName("")}
          fields={{
            years: employee?.TotalExperience?.years || 0,
            months: employee?.TotalExperience?.months || 0,
          }}
          label={{
            years: "Experience Years",
            months: "Experience Months",
          }}
          type={{
            years: "number",
            months: "number",
          }}
          suggestions={{}}
          metaData={{
            title: "Year Experience",
            onSubmitFunc: employeeExp,
            id: null,
          }}
        />
      )}

      {modalName === "education" && (
        <UpdateProfileModal
          open={modalName === "education"}
          onClose={() => setModalName("")}
          setInitials={() => setSelectedEducation(null)}
          fields={{
            qualification: selectedEducation?.qualification || "Graduate",
            isHighestQualification: false,
            schoolMedium: "Hindi",
            instituteName: selectedEducation?.instituteName || "",
            ...(educationvalue === "Graduate" || educationvalue === "Postgraduate"
              ? { degree: selectedEducation?.degree || "" }
              : {}),
            specialization: selectedEducation?.specialisation || "",
            studyMode: selectedEducation?.studyMode || "Full-time",
            startDate: selectedEducation?.startDate || "",
            endDate: selectedEducation?.endDate || "",
          }}

          label={{
            qualification: "Education Level",
            instituteName: "College/School Name",
            isHighestQualification: "Is this your highest qualification",
            schoolMedium: "Medium of this study",
            degree: "Degree",
            specialization: "Specialization",
            studyMode: "Mode of your study",
            startDate: "Start Date",
            endDate: "End Date",
          }}
          type={{
            qualification: "radio",
            instituteName: "text",
            isHighestQualification: "radio",
            schoolMedium: "radio",
            degree: "autocomplete",
            specialization: "autocomplete",
            studyMode: "radio",
            startDate: "date",
            endDate: "date",
          }}
          suggestions={{
            qualification: [
              { "10th": "10th_or_Below_10th" },
              { "12th": "12th_Pass" },
              { Diploma: "Diploma_Categories" },
              { ITI: "ITI" },
              { Graduate: "Graduate" },
              { "Post Graduate": "Postgraduate" },
              { "CA/CS/ICWA": "Professional_Certification" },
            ],
            isHighestQualification: [{ Yes: true }, { No: false }],
            degree:
              educationvalue === "Graduate"
                ? graduateDegrees
                : postGraduateDegrees,
            schoolMedium: [{ Hindi: "Hindi" }, { English: "English" }],
            specialization: specializationSuggestions,
            studyMode: [
              { "Full-Time": "f" },
              { "Part-Time": "p" },
              { Correspondence: "c" },
            ],
          }}

          metaData={{
            title: " Edit Education",
            onSubmitFunc: selectedEducation ? editEducation : createEducation,
            id: selectedEducation?.id,
            inputChange: inputEducationChange
          }}
        />
      )}

      {modalName === "certification" && (
        <UpdateProfileModal
          open={modalName === "certification"}
          onClose={() => setModalName("")}
          fields={{
            certification: Array.isArray(employee?.certification)
              ? employee?.certification
              : (employee?.certification &&
                JSON.parse(employee?.certification)) ||
              [],
          }}
          label={{ certification: "Add Your Certification Name" }}
          type={{
            certification: "multi",
          }}
          suggestions={{
            certification: certificationSuggestions
          }}
          metaData={{
            title: " Add Certification",
            onSubmitFunc: updateProfileFunc,
            id: null,
            inputChange: handleCertificationSuggestions
          }}
        />
      )}

      {modalName === "basicDetails" && (
        <UpdateProfileModal
          open={modalName === "basicDetails"}
          onClose={() => setModalName("")}
          fields={{
            fullName: employee?.fullName || "",
            email: employee?.email || "",
            gender: employee?.gender || "",
            dob: employee?.dob || "",
            currentLocation: employee?.currentLocation || "",
            hometown: employee?.hometown || "",
          }}
          label={{
            fullName: "Enter Your Name",
            email: "Enter Your Email",
            gender: "Enter Your Gender",
            dob: "Enter your Date of birth",
            currentLocation: "Enter Your Current Location",
            hometown: "Enter the Home Town",
          }}
          type={{
            fullName: "text",
            email: "text",
            gender: "text",
            dob: "date",
            currentLocation: "text",
            hometown: "text",
          }}
          suggestions={{
            gender: ["Male", "Female", "Other"],
          }}
          metaData={{
            title: " Edit Basic Details",
            onSubmitFunc: updateProfileFunc,
            id: null,
          }}
        />
      )}
    </div>
  );
}
