import { Autocomplete, Dialog, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DynamicModal from "./updateProfileModal";
import { addEmpExp } from "../../../API/ApiFunctions";
import { showErrorToast, showSuccessToast } from "../../ui/toast";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "../../../Redux/getData";
// import EditjobRoleModal from "../";


const industries = ["IT Services & Consulting", "IT", "Education", "Healthcare", "Finance", "Manufacturing"];
const types = ["Full-time", "Part-time", "Intern", "Contract"];
const noticePeriods = [
  "No notice period", "Less than 15 days", "1 month", "2 months", "3 or more months"
];




const EditExperienceModal = ({ data, setInitials, suggestions, metaData, Open, close }) => {
  const [jobRoleModalOpen, setjobRoleModalOpen] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const dispatch = useDispatch();


  const { register, setValue, control, watch, getValues, setError, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      jobTitle: data?.jobTitle || null,
      jobRole: data?.jobRole ? (Array.isArray(data?.jobRole) ? data?.jobRole : JSON.parse(data?.jobRole)) : null,
      isCurrent: data?.isCurrent || false,
      companyName: data?.companyName || null,
      description: data?.description || null,
      skillsUsed: data?.skillsUsed ? (Array.isArray(data?.skillsUsed) ? data?.skillsUsed : JSON.parse(data?.skillsUsed)) : [],
      employmentType: data?.employmentType || null,
      startDate: data?.startDate || null,
      endDate: data?.endDate || Date.now(),
      industry: data?.industry || null,
      noticePeriod: data?.noticePeriod || null
    },
  });

  const skillsUsed = watch("skillsUsed")
  const isCurrentCompany = watch("isCurrent")
  const jobRole = watch("jobRole");
  const employementType = watch("employmentType");
  const noticePeriod = watch("noticePeriod");

  console.log(employementType)

  const onSubmit = async (data) => {

    setButtonDisable(true)
    if (data.startDate) {
      const start = new Date(data.startDate);
      const end = new Date(data?.endDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // remove time part

      let hasError = false;

      if (start > today) {
        setError("startDate", {
          type: "manual",
          message: "Start date must be in the past",
        });
        hasError = true;
      }

      if (end > today) {
        setError("endDate", {
          type: "manual",
          message: "End date must be in the past",
        });
        hasError = true;
      }

      if (end && start > end) {
        setError("startDate", {
          type: "manual",
          message: "Start date can't be after end date",
        });
        hasError = true;
      }

      if (hasError) return;
    }


    const response = await metaData.onSubmitFunc(metaData.id, data);
    if (response) {
      showSuccessToast("Succesfully Updated");
      setInitials()
      setButtonDisable(false)
      dispatch(fetchUserProfile())
      close()
    } else {
      showErrorToast("couldn't uploaded, Please try again!")
      setButtonDisable(false)
    }

  };





  return (
    <>
      <Dialog className="rounded-lg" maxWidth="xs" fullWidth open={Open} onClose={close}>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl overflow-y-auto max-h-[90vh]">
          <h2 className="  w-full text-16 font-medium text-gray-800 mb-4"> <div>Edit Experience</div></h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Job Details */}
            <div>
              <h1 className="text-16 font-medium text-gray-800 mb-4"> Job Details</h1>
              <label className="block text-14 font-medium text-gray-650 mb-1">Job Title</label>
              <input
                {...register("jobTitle", { onChange: (e) => setButtonDisable(false) })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-secondary"
                placeholder="Job Title"
              />
            </div>

            <div>
              <label className="block text-14 font-medium text-gray-650 mb-1">Job Roles</label>
              <div
                onClick={() => {

                  setjobRoleModalOpen(true);
                }}
                className="flex flex-wrap gap-2 mb-2 px-3 py-2 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:border-secondary min-h-[40px]"
              >
                {Array.isArray(jobRole) ? (
                  jobRole?.map((role, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-white px-2 py-1 rounded-md text-14"
                    >
                      {role}
                    </span>
                  ))
                ) : (
                  JSON.parse(jobRole)?.map((role, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-white px-2 py-1 rounded-md text-14"
                    >
                      {role}
                    </span>
                  ))
                )}
              </div>
            </div>

            <div>
              <label className="block text-14 font-medium text-gray-650 mb-1">Description (optional)</label>
              <textarea
                {...register("description", { onChange: (e) => setButtonDisable(false) })}
                rows={4}
                maxLength={4000}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-secondary"
                placeholder="Describe your work..."
              />
            </div>

            {/* skillUsed */}
            <div>
              <label className="block text-14 font-medium text-gray-650 mb-1">Enter Your Skills</label>
              <div className="flex items-center gap-2 mb-2">


                <Controller
                  name="skillsUsed"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      freeSolo
                      multiple
                      className="w-full"
                      options={suggestions?.skills}
                      value={field.value || []}
                      onChange={(_, newValue) => field.onChange(newValue)}
                      onInputChange={(event, newInputValue, reason) => {
                        if (reason === "input") {
                          metaData.inputChange(newInputValue); // Call your suggestion function
                        }
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          placeholder="Type a skill"
                        />
                      )}
                    />
                  )}
                />


              </div>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(skillsUsed) ? (
                  <div className="flex flex-row gap-2">
                    {skillsUsed?.map((skill) => (
                      <div
                        key={skill}
                        className="bg-secondary text-white px-2 py-1 rounded-md text-14 flex items-center gap-1"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="bg-secondary text-white px-2 py-1 rounded-md text-14"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                ) :
                  (<div className="flex flex-row gap-2">
                    {JSON.parse(skillsUsed)?.map((skill) => (
                      <div
                        key={skill}
                        className="bg-secondary text-white px-2 py-1 rounded-md text-14 flex items-center gap-1"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="bg-secondary text-white px-2 py-1 rounded-md text-14"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  )
                }
              </div>
            </div>

            {/* Company Details */}
            <div>
              <h1 className="text-16 font-medium text-gray-800 mb-4">Company Details</h1>
              <label className="block text-14 font-medium text-gray-650 mb-1">Company Name</label>
              <input
                {...register("companyName", { onChange: (e) => setButtonDisable(false) })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-secondary"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block text-14 font-medium text-gray-650 mb-1">Industry</label>
              <select {...register("industry", { onChange: (e) => setButtonDisable(false) })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-secondary">
                {industries.map((industry, index) => (
                  <option className="w-full p-2 border   focus:outline-none focus:border-secondary" key={index} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            {/* Employment Details */}
            <div>
              <h1 className=" text-16 font-medium text-gray-800 mb-4">Employement Details</h1>

              <label className="block text-14 font-medium text-gray-650 mb-1">
                Are you currently working here?
              </label>
              <div className="flex gap-4 mb-2">
                <button
                  type="button"
                  className={`px-2 py-1 text-14 rounded-md border cursor-pointer ${isCurrentCompany ? "bg-secondary text-white" : "bg-white text-gray-650 "
                    }`}
                  onClick={() => {
                    setValue("isCurrent", true)
                    setButtonDisable(false)
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`px-2 py-1 text-14 rounded-md border cursor-pointer ${!isCurrentCompany ? "bg-secondary text-white" : "bg-white text-gray-650"
                    }`}
                  onClick={() => {

                    setValue("isCurrent", false);
                  }}
                >
                  No
                </button>
              </div>

              <label className="block text-14 font-medium text-gray-650 mb-2">Employment Type</label>
              <div className="flex flex-wrap gap-4">
                {types.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`px-2 py-1 text-14 rounded-md border transition ${employementType === type
                      ? "bg-secondary text-white"
                      : "bg-white text-gray-650"
                      }`}
                    onClick={() => {

                      setValue("employmentType", type);
                      setButtonDisable(false)
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-14 font-medium text-gray-650 mb-2">Notice Period</label>
              <div className="flex flex-wrap gap-2">
                {noticePeriods.map((period) => (
                  <label key={period} className="cursor-pointer">

                    <div onClick={() => {
                      setValue("noticePeriod", period)
                      setButtonDisable(false)
                    }} className={`px-2 py-1 rounded-md text-14 border ${noticePeriod === period ? "bg-secondary text-white" : "bg-white text-gray-650"}`}>
                      {period}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Dates */}
            <div>
              <label className="block text-14 font-medium text-gray-650 mb-1">Start Date</label>
              <div className="flex flex-col gap-1 w-full">
                <input
                  type="date"
                  className={`w-full p-2 text-14 border rounded-md focus:outline-none ${errors.startDate ? "border-red-500" : "border-gray-300"
                    } focus:border-secondary`}
                  {...register("startDate")}
                  onChange={(e) => {
                    setValue("startDate", e.target.value);
                    setButtonDisable(false);
                  }}
                />
                {errors.startDate && (
                  <p className="text-red-500 text-sm">{errors.startDate.message}</p>
                )}
              </div>
            </div>

            {!isCurrentCompany && (
              <div>
                <label className="block text-14 font-medium text-gray-650 mb-1">End Date</label>
                <div className="flex flex-col gap-1 w-full">
                  <input
                    type="date"
                    className={`w-full p-2 text-14 border rounded-md focus:outline-none ${errors.endDate ? "border-red-500" : "border-gray-300"
                      } focus:border-secondary`}
                    {...register("endDate")}
                    onChange={(e) => {
                      setValue("endDate", e.target.value);
                      setButtonDisable(false);
                    }}
                  />
                  {errors.endDate && (
                    <p className="text-red-500 text-sm">{errors.endDate.message}</p>
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={close}
                className="px-2 text-14 py-1 bg-white text-secondary border border-secondary rounded-md cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={buttonDisable}
                className={`px-2 text-[14px] py-1 rounded-md shadow-none 
                 ${buttonDisable
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-secondary text-white cursor-pointer"}
                  `}
              >
                Save
              </button>
            </div>
          </form>
        </div>

      </Dialog>


      {jobRoleModalOpen && (
        <DynamicModal
          open={jobRoleModalOpen}
          onClose={() => setjobRoleModalOpen(false)}
          fields={{
            jobRole: Array.isArray(jobRole) ? jobRole : JSON.parse(jobRole) || []
          }}
          type={{ jobRole: "multi" }}
          label={{ jobRole: "Please Add Job Roles" }}
          suggestions={{ jobRole: ["manager", "Charted accountant", "Full stack developer", "Front end developer"] }}
          metaData={{
            title: "Job Roles",
            onSubmitFunc: (data) => {
              setValue("jobRole", data.jobRole);
              return "succesfull"
            },
            id: null
          }}
        />
      )}
    </>
  );
};

export default EditExperienceModal;
