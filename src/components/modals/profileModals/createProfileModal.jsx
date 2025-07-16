import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Typography, Box, Chip, RadioGroup, FormLabel, FormControlLabel, Radio, Checkbox, FormControl, InputLabel, Select, MenuItem, Autocomplete, Step, Stepper, StepLabel } from "@mui/material";
import { Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createProfile, getJobRolesuggestions } from "../../../API/ApiFunctions";
import { showErrorToast, showSuccessToast } from "../../ui/toast";



const suggestedTitles = [
    "Manager", "Assistant", "CEO", "COO", "Coordinator"
]

const salaryOptions = [
    '₹5,000 - ₹10,000',
    '₹10,000 - ₹15,000',
    '₹15,000 - ₹20,000',
    '₹20,000 - ₹25,000',
    '₹25,000 - ₹30,000',
    '₹30,000 - ₹35,000',
    '> ₹35,000',
];

const languages = ["Hindi", "Tamil", "Telugu", "Marathi", "Bangla"]

const englishOptions = [
    {
        value: 'no_english',
        label: 'No English',
        description: '',
    },
    {
        value: 'basic',
        label: 'Basic',
        description: 'You can understand/speak basic sentences',
    },
    {
        value: 'intermediate',
        label: 'Intermediate',
        description: 'You can have a conversation in English on some topics',
    },
    {
        value: 'advanced',
        label: 'Advanced',
        description: 'You can do your entire job in English and speak fluently',
    },
];

const shiftOptions = ['Night Shift', 'Day Shift'];
const workplaceOptions = ['Work from Home', 'Work from Office', 'Field Job'];
const employementType = ["Full Time", "Part Time"];



export default function CreateProfileModal() {

    const [steps, setSteps] = useState(0);
    const [experienceYears, setExperienceYears] = useState(0);
    const [experienceMonths, setExperienceMonths] = useState(0);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedShift, setSelectedShifts] = useState([]);
    const [selectedWorkPlaces, setSelectedWorkPlaces] = useState([]);
    const [selectedEmployementType, setSelectedEmployementType] = useState([]);
    const [jobRoleSuggestions, setJobRoleSuggestions] = useState([])
    const [inputText, setInputText] = useState("")

    const yearsOptions = Array.from({ length: 31 }, (_, i) => i);
    const monthsOptions = Array.from({ length: 12 }, (_, i) => i);

    const navigate = useNavigate();

    const {
        register,
        control,
        handleSubmit,
        setValue,
        setError,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: null,
            dob: null,
            gender: null,
            email: null,
            profileImage: null,
            whatsappUpdates: false,
            years: null,
            months: null,
            experiences: (experienceYears !== 0 || experienceMonths !== 0)
                ? [{ jobRole: null, jobTitle: null, currentSalary: null, companyName: null }]
                : [],
            englishProficiency: null,
            otherLanguages: [],
            preferredShifts: [],
            preferredWorkplace: [],
            preferredEmployementType: [],
            resume: null
        }
    });



    const handleSelectedJobTitles = (value) => {
        setValue('experiences[0].jobTitle', value);
    };



    const handleAdd = (fieldName, value, selectedArray, setSelectedArray) => {
        if (!selectedArray.includes(value)) {
            const updated = [...selectedArray, value];
            setSelectedArray(updated);
            setValue(fieldName, updated); // updates useForm field
        }
    };
    const handleDelete = (fieldName, value, selectedArray, setSelectedArray) => {
        const updated = selectedArray.filter((role) => role !== value);
        setSelectedArray(updated);
        setValue(fieldName, updated);
    };


    const inputRoleChange = async (value) => {
        const response = await getJobRolesuggestions(value);
        if (response) {
            setJobRoleSuggestions(response.data.data)
        }
    }



    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === "application/pdf" || file.name.endsWith(".docx"))) {
            setValue("resume", file); // Set in react-hook-form state
        } else {
            showErrorToast("Only PDF or DOCX files are allowed");
        }
    };


    const firstStepValidation = (data) => {
        if (data.dob) {
            const start = new Date(data.dob);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const eighteenYearsAgo = new Date();
            eighteenYearsAgo.setFullYear(today.getFullYear() - 18);

            const sixtyYearAgo = new Date();
            sixtyYearAgo.setFullYear(today.getFullYear() - 60);

            let hasError = false;

            console.log(start, today, eighteenYearsAgo)

            if (start > today) {
                setError("dob", {
                    type: "manual",
                    message: "Start date must be in the past",
                });
                hasError = true;
            }

            if (start > eighteenYearsAgo) {
                setError("dob", {
                    type: "manual",
                    message: "Minimum age should be 18 years",
                });
                hasError = true;
            }

            if (start < sixtyYearAgo) {
                setError("dob", {
                    type: "manual",
                    message: "Maximum age should be 60 years",
                });
                hasError = true;
            }




            if (hasError) return;
        }

        setSteps((prev) => prev + 1)
    }


    const onSubmit = async (data) => {



        const response = await createProfile(data);
        if (response) {
            const user = JSON.parse(localStorage.getItem("User"));
            const newUser = JSON.stringify({ ...user, profile: true })
            localStorage.setItem("User", newUser)
            showSuccessToast("Profile created successfully")
            navigate("/jobs")
        } else {
            showErrorToast("could not create profile, Please try again")
        }
    };

    return (
        <div className="flex w-full min-h-screen bg-gray-100 flex-col">

            <div className="mt-2 pt-6 h-auto bg-white rounded-lg">
                <Stepper activeStep={steps} alternativeLabel className="mb-8">
                    {["personal Information", "Experience", "Languages", "Preference"].map((label, index) => (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>

            {/* Right Section */}
            {steps === 0 &&
                <div className="w-full p-8 bg-white overflow-y-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">Basic Details</h2>

                        {/* Name */}
                        <TextField
                            fullWidth
                            size="small"
                            label="fullName"
                            variant="outlined"
                            {...register("fullName", { required: true })}
                            error={!!errors.name}
                            helperText={errors.name ? "Name is required" : ""}

                        />

                        {/* DOB */}
                        <div className="relative">
                            <TextField
                                fullWidth
                                size="small"
                                label="Date Of Birth"
                                type="date"
                                {...register("dob", { required: true })}
                                error={!!errors.dob}
                                helperText={errors.dob ? errors.dob.message : ""}
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}

                            />

                        </div>

                        {/* Gender */}
                        <Controller
                            name="gender"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <RadioGroup row {...field}>
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            )}
                        />
                        {errors.gender && <span className="text-red-500 text-sm">Gender is required</span>}

                        <Typography >Are You Physically Disable</Typography>
                        <Controller
                            name="handicapped"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <RadioGroup row {...field}>
                                    <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                    <FormControlLabel value={false} control={<Radio />} label="No" />
                                </RadioGroup>
                            )}
                        />
                        {errors.gender && <span className="text-red-500 text-sm">Gender is required</span>}

                        {/* Email */}
                        <TextField
                            fullWidth
                            size="small"
                            label="Email Address (Optional)"
                            variant="outlined"
                            type="email"
                            {...register("email")}
                        />

                        {/* WhatsApp Updates */}
                        <div className="flex items-center">
                            <Checkbox {...register("whatsappUpdates")} />
                            <label className="text-sm text-gray-700">
                                Send me important job updates on Whatsapp
                            </label>
                        </div>

                        {/* Submit Button */}
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Button
                                variant="contained"
                                onClick={handleSubmit(firstStepValidation)}

                                className="bg-secondary px-2 py-1 w-1/4 text-white font-bold"
                            >
                                Next
                            </Button>
                        </Box>

                    </form>
                </div>
            }

            {steps === 1 &&
                <div className="w-2/3 p-8 bg-white overflow-y-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <h2 className="text-16 text-gray-800 font-semibold mb-4">Experience Details</h2>

                        {/* Total Years of Experience */}
                        <label className="block font-medium text-16 text-gray-800">Total Years of Experience</label>
                        <div className="flex gap-4">
                            <FormControl fullWidth>
                                <InputLabel>Years</InputLabel>
                                <Controller
                                    name="years"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            label="Years"
                                            size="small"
                                            {...field}
                                            value={field.value || ""}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                field.onChange(value);        // update react-hook-form state
                                                setExperienceYears(value);    // update your local state
                                            }}
                                        >
                                            {yearsOptions.map((year) => (
                                                <MenuItem key={year} value={year}>
                                                    {year}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>


                            <FormControl fullWidth>
                                <InputLabel>Months (Optional)</InputLabel>
                                <Controller
                                    name="months"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            value={field.value || ""}
                                            label="Months (Optional)"
                                            size="small"
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                field.onChange(value);        // update react-hook-form state
                                                setExperienceMonths(value);    // update your local state
                                            }}>
                                            {monthsOptions.map((month) => (
                                                <MenuItem key={month} value={month}>
                                                    {month}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </div>

                        {(experienceYears !== 0 || experienceMonths !== 0) &&
                            <>

                                <Controller
                                    name="experiences[0].jobRole"
                                    control={control}
                                    render={({ field }) => (
                                        <>
                                            {/* Render chips above input */}
                                            <Box display="flex" flexWrap="wrap" gap={1} mb={1}>
                                                {(field.value || []).map((item, index) => (
                                                    <Chip
                                                        key={index}
                                                        label={item}
                                                        onDelete={() => {
                                                            const updated = field.value.filter((_, i) => i !== index);
                                                            field.onChange(updated);
                                                        }}
                                                    />
                                                ))}
                                            </Box>

                                            {/* Autocomplete input only (no chips inside) */}
                                            <Autocomplete
                                                freeSolo
                                                options={jobRoleSuggestions}
                                                value={null}
                                                inputValue={inputText}
                                                onInputChange={(event, newInputValue) => {
                                                    setInputText(newInputValue);
                                                    inputRoleChange(newInputValue);
                                                }}
                                                onChange={(event, newValue) => {
                                                    if (!newValue) return;
                                                    const updated = [...(field.value || []), newValue];
                                                    field.onChange([...new Set(updated)]);
                                                    setInputText("");
                                                }}
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Job Roles" size="small" variant="outlined" />
                                                )}
                                            />
                                        </>
                                    )}
                                />





                                {/* Job Title */}

                                <Controller
                                    name="experiences[0].jobTitle"
                                    control={control}

                                    rules={{
                                        required: "Job title is required",
                                    }}
                                    render={({ field }) => (
                                        <>
                                            <TextField
                                                {...field}
                                                value={field.value ?? ""}
                                                placeholder="Search your job title"
                                                size="small"
                                                label="Job Titles"
                                                variant="outlined"

                                                fullWidth
                                                error={!!errors.experiences?.[0]?.jobTitle}
                                                helperText={errors.experiences?.[0]?.jobTitle ? errors.experiences?.[0]?.jobTitle.message : ""}  // Display error message

                                            />

                                        </>
                                    )}
                                />


                                <div>
                                    <Typography className="text-sm font-medium mb-2">
                                        Suggested job Title
                                    </Typography>
                                    <Box className="flex flex-wrap gap-2">
                                        {suggestedTitles.map((title) => (
                                            <Chip
                                                key={title}
                                                label={
                                                    <span className="flex items-center gap-1">
                                                        {title} <Plus size={14} />
                                                    </span>
                                                }
                                                onClick={() => handleSelectedJobTitles(title)}
                                                variant="outlined"
                                            />
                                        ))}
                                    </Box>

                                </div>


                                {/* Company Name */}
                                <TextField
                                    label="Company Name"
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    {...register('experiences[0].companyName', { required: true })}
                                    error={!!errors.experiences?.[0]?.companyName}
                                    helperText={errors.experiences?.[0]?.companyName ? "Company Name is required" : ""}  // Display error message

                                />

                                {/* Current Salary */}
                                {/* <Controller
                                    name="currentSalary"
                                    control={control}
                                    render={({ field }) => ( */}
                                <TextField
                                    size="small"
                                    label="Current Salary"
                                    fullWidth
                                    type="number"
                                    {...register('experiences[0].currentSalary', {
                                        setValueAs: value => value === "" ? null : Number(value), // convert to number
                                        validate: value => {
                                            if (value === null) return true; // allow null if field is optional
                                            if (value < 0) return "Salary cannot be negative";
                                            if (value < 5000) return "Salary must be at least ₹5,000";
                                            if (value > 1000000) return "Salary cannot exceed ₹10,00,000";
                                            return true;
                                        }
                                    })}
                                />

                                {errors?.experiences?.[0]?.currentSalary && (
                                    <span style={{ color: 'red' }}>
                                        {errors.experiences[0].currentSalary.message}
                                    </span>
                                )}

                                {/* )}
                                /> */}

                                {/* Salary Range Options */}
                                {/* <Box className="space-y-2">
                                    <Typography className="text-sm font-medium">
                                        Select salary range
                                    </Typography>
                                    <Box className="flex flex-wrap gap-2">
                                        {salaryOptions.map((range) => (
                                            <Chip
                                                key={range}
                                                label={range}
                                                variant={currentSalary === range ? 'filled' : 'outlined'}
                                                color={currentSalary === range ? 'success' : 'default'}
                                                onClick={() => handleSelectSalary(range)}
                                            />
                                        ))}
                                    </Box>
                                </Box> */}

                                {/* Info Note */}
                                <Box className="bg-blue-50 text-sm text-gray-700 p-3 rounded-md">
                                    <span className="text-blue-800 font-medium">Salary information is important,</span> we use it only to show relevant jobs.
                                </Box>
                            </>
                        }

                        <div className="flex flex-row gap-5">
                            <Button
                                variant="outlined"
                                onClick={() => setSteps((prev) => prev - 1)}
                                fullWidth

                                className="hover:!bg-gray-200 text-white font-bold"
                            >
                                Back
                            </Button>

                            {/* Submit Button */}
                            <Button
                                variant="contained"
                                onClick={handleSubmit(() => setSteps((prev) => prev + 1))}
                                fullWidth
                                className="bg-secondary text-white font-bold"
                            >
                                Next
                            </Button>
                        </div>

                    </form>
                </div>

            }

            {steps === 2 &&
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-xl space-y-6">
                    <Typography variant="h6" className="font-semibold">
                        Preferred Language
                    </Typography>

                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend" className="mb-2 font-medium text-base">
                            English
                        </FormLabel>
                        <Controller
                            name="englishProficiency"
                            control={control}
                            rules={{ required: "Proficiency is required" }}
                            render={({ field, fieldState }) => (
                                <>
                                    <RadioGroup {...field}>
                                        {englishOptions.map((option) => (
                                            <FormControlLabel
                                                key={option.value}
                                                value={option.value}
                                                control={<Radio />}
                                                label={
                                                    <Box>
                                                        <Typography variant="body1" fontWeight={500}>
                                                            {option.label}
                                                        </Typography>
                                                        {option.description && (
                                                            <Typography variant="body2" color="text.secondary">
                                                                {option.description}
                                                            </Typography>
                                                        )}
                                                    </Box>
                                                }
                                                className="py-2"
                                            />
                                        ))}
                                    </RadioGroup>
                                    {/* Display the error message */}
                                    {fieldState?.error && (
                                        <Typography color="error" variant="body2">
                                            {fieldState?.error?.message}
                                        </Typography>
                                    )}
                                </>
                            )}
                        />

                    </FormControl>

                    {/* Other Language */}


                    {/* other language Options */}
                    <Box className="space-y-2">
                        <Typography className="text-sm font-medium">
                            Select Languages
                        </Typography>
                        <Box className="flex flex-wrap gap-2">
                            {languages.map((language) => {
                                const isSelected = selectedLanguages.includes(language);
                                return (
                                    <Chip
                                        key={language}
                                        label={language}
                                        variant={isSelected ? 'filled' : 'outlined'}
                                        sx={isSelected ? { backgroundColor: "#0784C9", color: "white" } : {}}
                                        onClick={() => {
                                            if (isSelected) {
                                                handleDelete("otherLanguages", language, selectedLanguages, setSelectedLanguages);
                                            } else {
                                                handleAdd("otherLanguages", language, selectedLanguages, setSelectedLanguages);
                                            }
                                        }}
                                    />
                                );
                            })}
                        </Box>
                    </Box>

                    <div className="flex flex-row gap-5">
                        <Button
                            variant="outlined"
                            onClick={() => setSteps((prev) => prev - 1)}
                            fullWidth

                            className="hover:!bg-gray-200 text-white font-bold"
                        >
                            Back
                        </Button>

                        {/* Submit Button */}
                        <Button
                            variant="contained"
                            onClick={handleSubmit(() => setSteps((prev) => prev + 1))}
                            fullWidth
                            className="bg-secondary text-white font-bold"
                        >
                            Next
                        </Button>
                    </div>
                </form>
            }


            {steps === 3 && (
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-xl space-y-6">
                    <Typography variant="h6" className="font-semibold">
                        Preferred Shifts
                    </Typography>

                    <Box className="flex flex-wrap gap-2">
                        {shiftOptions.map((shift) => {
                            const isSelected = selectedShift.includes(shift);
                            return (
                                <Chip
                                    key={shift}
                                    label={shift}
                                    variant={isSelected ? 'filled' : 'outlined'}
                                    sx={isSelected ? { backgroundColor: "#0784C9", color: "white" } : {}}
                                    onClick={() =>
                                        isSelected
                                            ? handleDelete("preferredShifts", shift, selectedShift, setSelectedShifts)
                                            : handleAdd("preferredShifts", shift, selectedShift, setSelectedShifts)
                                    }
                                />
                            );
                        })}
                    </Box>

                    <Typography variant="h6" className="font-semibold">
                        Preferred Workplaces
                    </Typography>

                    <Box className="flex flex-wrap gap-2">
                        {workplaceOptions.map((place) => {
                            const isSelected = selectedWorkPlaces.includes(place);
                            return (
                                <Chip
                                    key={place}
                                    label={place}
                                    variant={isSelected ? 'filled' : 'outlined'}
                                    sx={isSelected ? { backgroundColor: "#0784C9", color: "white" } : {}}
                                    onClick={() =>
                                        isSelected
                                            ? handleDelete("preferredWorkplace", place, selectedWorkPlaces, setSelectedWorkPlaces)
                                            : handleAdd("preferredWorkplace", place, selectedWorkPlaces, setSelectedWorkPlaces)
                                    }
                                />
                            );
                        })}
                    </Box>

                    <Typography variant="h6" className="font-semibold">
                        Preferred Employement Type
                    </Typography>

                    <Box className="flex flex-wrap gap-2">
                        {employementType.map((type) => {
                            const isSelected = selectedEmployementType.includes(type);
                            return (
                                <Chip
                                    key={type}
                                    label={type}
                                    variant={isSelected ? 'filled' : 'outlined'}
                                    sx={isSelected ? { backgroundColor: "#0784C9", color: "white" } : {}}
                                    onClick={() =>
                                        isSelected
                                            ? handleDelete("preferredEmployementType", type, selectedEmployementType, setSelectedEmployementType)
                                            : handleAdd("preferredEmployementType", type, selectedEmployementType, setSelectedEmployementType)
                                    }
                                />
                            );
                        })}
                    </Box>

                    <div className="flex flex-row gap-5">
                        <Button
                            variant="outlined"
                            onClick={() => setSteps((prev) => prev - 1)}
                            fullWidth

                            className="hover:!bg-gray-200 text-white font-bold"
                        >
                            Back
                        </Button>

                        {/* Submit Button */}
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            className="!bg-secondary-400 hover:!bg-secondary-500 text-white font-bold"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            )}

            {/* {steps === 4 &&
                <Box className="w-full max-w-xl p-6 bg-[#fdf6ff] rounded-lg shadow-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-xl space-y-6">
                      
                        <Typography variant="h6" className="font-semibold mb-2">
                            Resume
                        </Typography>

                        <Box className="mb-6">
                            <LinearProgress variant="determinate" value={75} />
                        </Box>

                        <Typography variant="h5" className="font-bold mb-1 text-center">
                            Upload your resume!
                        </Typography>
                        <Typography className="text-center mb-3 text-gray-700">
                            Receive <strong>2x job offers</strong> after uploading
                        </Typography>

                        <Box className="flex justify-center mb-4">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                                ⚡ Takes less than a min to upload
                            </span>
                        </Box>

                        <Box className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-blue-300 rounded-xl bg-wte">
                            <UploadCloud className="w-10 h-10 text-blue-500 mb-2" />
                            <Typography className="text-sm text-gray-600 text-center">
                                Upload <strong>.pdf</strong> or <strong>.docx</strong> file only
                                <br />
                                (Max file size: <strong>5 MB</strong>)
                            </Typography>
                            <Button
                                variant="contained"
                                className="mt-3 bg-blue-600 hover:bg-blue-700 text-white"
                                component="label"
                            >
                                Upload Resume
                                <input type="file" hidden accept=".pdf,.docx" onChange={handleFileChange} />
                            </Button>
                        </Box>

                        <Box className="mt-6 space-y-2 text-sm text-gray-700">
                            <div className="flex items-start gap-2">
                                <span className="text-green-600">✔</span>
                                <span>Unlock jobs from top companies faster</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-green-600">✔</span>
                                <span>Get direct calls from top HRs</span>
                            </div>
                        </Box>

                        <Button
                            variant="contained"
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 w-full"
                        >
                            Submit
                        </Button>

                    </form>
                </Box>
            } */}


        </div>
    );
}
