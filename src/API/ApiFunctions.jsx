import axios from "axios";
import { addExpApi, applyJobApi, createEducationApi, createEmpProfile, employeeExpApi, getJobsApi, mobileApi, otpApi, uploadProfileApi, uploadResumeApi, resendOtp, jobfilterApi, getCitiesApi, getEducationSuggestionsApi, getSkillsSuggestionsApi, getCertificationSuggestionsApi, getJobFilterBySalaryApi, jobAllFilterApi, JobRoleSuggestionsApi, logOutApi, createResumeApi, citiesSuggestionsApi, searchJobApi } from "./APIs";
import { showErrorToast } from "../components/ui/toast";


// data={ phone: "string", role: "string" }
export const handlelogin = async (data) => {
    try {
        const response = await axios.post(mobileApi, data);
        return response;
    } catch (e) {
        console.log("error in logging in", e)
    }


}

// data={phone:"string",role:"string",otp:"string"}
export const handleOtp = async (data) => {
    try {
        const response = await axios.post(otpApi, data);

        localStorage.setItem("TokenId", response.data.token)
        localStorage.setItem("User", JSON.stringify(response.data.user))

        return response;
    } catch (err) {
        console.log("error response", err);
        alert("Login Unsucessfull")

    }
}

export const logOutFunc = async() =>{
  try {
    const token = localStorage.getItem("TokenId");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.post(logOutApi, {}, { headers });

    return response;
  } catch (err) {
    console.log(err)
    showErrorToast("could not post");
  }
}

export const resendOtpApiCall = async (data) => {
    try {
        const response = await axios.post(resendOtp, data); // resendOtp is your endpoint URL
        return response;
    } catch (error) {
        console.log("Error from resend OTP API", error);
        return null;
    }
};

export const createProfile = async (data) => {
    try {
        const token = localStorage.getItem('TokenId')
        console.log(`token ${token} data ${data}`);
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.post(createEmpProfile, data, {
            headers
        });

        console.log(`response`, response);
        return response


    } catch (error) {
        console.log("Error from create Profile api", error);


    }
}

export const getprofile = async () => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.get(createEmpProfile, { headers });

        return response;

    } catch (err) {
        console.log("Error from get Profile api", err)
    }
}

export const getJobs = async () => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.get(getJobsApi, { headers });

        return response;

    } catch (err) {
        console.log("Error from get jobs api", err)
    }
}


export const updateProfileFunc = async (data) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        console.log("data", data)

        const response = await axios.patch(createEmpProfile, data, { headers });

        console.log(response)
        return response;
    } catch (e) {
        console.log("error from Edit Profile", e)
    }
}

export const createEducation = async (data) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        console.log("data", data)


        const response = await axios.post(createEducationApi, data, { headers });

        console.log(response)
        return response;

    } catch (e) {
        console.log("error from edit education", e)
    }
}


export const editEducation = async (id, data) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        console.log("data", data, "id", id)

        if (!id) {
            const response = await axios.post(createEducationApi, data, { headers });

            console.log(response)
            return response;
        } else {
            const response = await axios.patch(`${createEducationApi}/${id}`, data, { headers });

            console.log(response)
            return response;
        }


    } catch (e) {
        console.log("error from edit education", e)
    }
}

export const uploadFile = async (file, field, Api) => {
    const data = new FormData();

    data.append(field, file);
    for (let [key, value] of data.entries()) {
        console.log(`${key}:`, value);
    }

    try {

        const token = localStorage.getItem("TokenId");
        const headers = {
            Authorization: `Bearer ${token}`
        }


        const res = await axios.post(Api, data, { headers });

        return res;

    } catch (err) {
        console.error(err);
    }
}

export const updateSkils = async (data) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };



        console.log("data", data)

        const response = await axios.patch(createEmpProfile, data, { headers });

        console.log(response)
        return response;
    } catch (e) {
        console.log("error from edit skills", e)
    }
}

export const employeeExp = async (data) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        console.log("data", data)
        const response = await axios.post(employeeExpApi, data, { headers });

        return response;

    } catch (err) {
        console.log("Error from get jobs api", err)
    }
}

export const addEmpExp = async (id, data) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        console.log("data", data, "id", id)

        if (id) {
            const response = await axios.patch(`${addExpApi}/${id}`, data, { headers });
            console.log(response)
            return response;
        } else {
            const response = await axios.post(addExpApi, data, { headers });
            console.log(response)
            return response;
        }



    } catch (e) {
        console.log("error from edit experience", e)
    }
}

export const applyJobs = async (id, employerId, data) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.post(`${applyJobApi}/${id}/${employerId}`, data, { headers });

        return response;

    } catch (err) {
        console.log("Error from get jobs api", err)
    }
}

export const deleteEducationfunc = async (id) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.delete(`${createEducationApi}/${id}`, { headers });

        return response;

    } catch (err) {
        console.log("Error from get jobs api", err)
    }
}

export const deleteExperiencefunc = async (id) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.delete(`${addExpApi}/${id}`, { headers });

        return response;

    } catch (err) {
        console.log("Error from get jobs api", err)
    }
}

export const jobfilter = async () => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(jobfilterApi, { headers })

        if (response) {
            return response;
        }
    } catch (e) {
        console.log(e)
    }
}

export const jobfilterBySalary = async () => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(`${getJobFilterBySalaryApi}/max`, { headers })

        if (response) {
            return response;
        }
    } catch (e) {
        console.log(e)
    }
}

export const getCities = async (value) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(`${getCitiesApi}/${value}`, { headers });

        return response;

    } catch (err) {
        console.log("Error from get city api", err)
    }
}

export const getEducationSuggestions = async (value) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(`${getEducationSuggestionsApi}/${value}`, { headers });

        return response;
    } catch (err) {
        console.log("Error from get city api", err)
    }
}

export const getJobRolesuggestions = async (value) =>{
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(`${JobRoleSuggestionsApi}/${value}`, { headers });

        return response;
    } catch (err) {
        console.log("Error from get Job Role suggestions api", err)
    }
}

export const getSkillSuggestions = async (value) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(`${getSkillsSuggestionsApi}/${value}`, { headers });

        return response;
    } catch (err) {
        console.log("Error from get Skills suggestions api", err)
    }
}

export const getCitiesSuggestion = async(value) =>{
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(`${citiesSuggestionsApi}/${value}`, { headers });

        return response;
    } catch (err) {
        console.log("Error from get city suggestions api", err)
    }
}

export const getCertificationSuggestions = async (value) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(`${getCertificationSuggestionsApi}/${value}`, { headers });

        return response;
    } catch (err) {
        console.log("Error from get Certifications suggestions api", err)
    }
}



// const applyAllFilters = useCallback(async () => {
//     // Start with the base list from Redux
//     // Ensure `jobs` is not null or undefined before proceeding
//     if (!jobs) {
//         setJobs([]); // Or show a loading state if jobs are still being fetched
//         return;
//     }

//     let currentJobsToFilter = [...jobs]; // Create a mutable copy of the original jobs

//     try {
//         // --- Step 1: Apply Main Tab Filter (Backend API Calls if specific logic) ---
//         if (selectedTab === "For You") {
//             const response = await jobfilter();
//             currentJobsToFilter = response?.data?.data || [];
//         } else if (selectedTab === "High Salary") {
//             const response = await jobfilterBySalary();
//             currentJobsToFilter = response?.data?.data || [];
//         } else if (selectedTab === "Nearby") {
//             // For 'Nearby' tab, you might want a specific API call that incorporates distance.
//             // If not, you'll filter client-side using `filters.distance` later.
//             // For now, let's keep it using the base jobs for client-side distance filtering later.
//             currentJobsToFilter = [...jobs];
//         } else { // "All Jobs" tab
//             currentJobsToFilter = [...jobs];
//         }

//         // --- Step 2: Apply Date Posted Filter (Backend API Call if applicable) ---
//         // This part needs careful consideration:
//         // If a main tab already fetched filtered data (e.g., 'For You'),
//         // should date filter then re-filter that data from the backend, or client-side?
//         // Assuming getJobsByDate *replaces* the list if applied, but only for "All Jobs" / "Nearby"
//         // If you want it to apply on top of "For You" / "High Salary", you need backend support for that combination.
//         if (
//             filters.datePosted !== "all" &&
//             (selectedTab === "All Jobs" || selectedTab === "Nearby") // Only apply if not special tabs
//         ) {
//             // Map human-readable label to API value for `getJobsByDate`
//             const apiDateValue =
//                 filters.datePosted === "Last 24 hours"
//                     ? "last24"
//                     : filters.datePosted === "Last 3 days"
//                         ? "last3"
//                         : filters.datePosted === "Last 7 days"
//                             ? "last7"
//                             : filters.datePosted; // Fallback for direct API values if any

//             if (apiDateValue) {
//                 const response = await getJobsByDate(apiDateValue);
//                 currentJobsToFilter = response?.data?.data || [];
//             }
//         }

//         // --- Step 3: Apply Other Sidebar Filters (Client-Side on `currentJobsToFilter`) ---
//         // These filters refine the `currentJobsToFilter` array
//         let finalFilteredJobs = [...currentJobsToFilter];

//         // Filter by Work Mode
//         if (filters.workMode !== "All") {
//             finalFilteredJobs = finalFilteredJobs.filter(
//                 (job) => job.workMode === filters.workMode
//             );
//         }

//         // Filter by Work Type
//         if (filters.workType !== "All") {
//             finalFilteredJobs = finalFilteredJobs.filter(
//                 (job) => job.workType === filters.workType
//             );
//         }

//         // Filter by Work Shift
//         if (filters.workShift !== "All") {
//             finalFilteredJobs = finalFilteredJobs.filter(
//                 (job) => job.workShift === filters.workShift
//             );
//         }

//         // Filter by Department
//         if (filters.department !== "All") {
//             finalFilteredJobs = finalFilteredJobs.filter(
//                 (job) => job.department === filters.department
//             );
//         }

//         // Filter by Distance (If 'Nearby' tab is active AND a distance filter is selected)
//         // This requires job location data and user location for calculation.
//         // Implement your distance calculation/filtering logic here.
//         if (selectedTab === "Nearby" && filters.distance !== "All") {
//             // Placeholder for distance filtering.
//             // You'll need job.location and userLocation data for actual logic.
//             console.log(`Applying Nearby filter (placeholder): ${filters.distance}`);
//             // Example: finalFilteredJobs = finalFilteredJobs.filter(job =>
//             //   calculateDistance(job.latitude, job.longitude, userLat, userLon) <= parseInt(filters.distance.match(/\d+/)[0])
//             // );
//         }

//         // --- Step 4: Apply Salary Filter (Client-Side) ---
//         finalFilteredJobs = finalFilteredJobs.filter((job) => job.salary <= salary);

//         // --- Step 5: Apply Sorting (Client-Side) ---
//         if (filters.sortBy === "Salary - High to low") {
//             finalFilteredJobs.sort((a, b) => b.salary - a.salary);
//         } else if (filters.sortBy === "Date posted - New to Old") {
//             // Assuming job.datePosted is a string or Date object that can be sorted
//             finalFilteredJobs.sort(
//                 (a, b) => new Date(b.datePosted) - new Date(a.datePosted)
//             );
//         }

//         setJobs(finalFilteredJobs);
//     } catch (err) {
//         console.error("Error applying filters:", err);
//         setJobs([]); // Set to empty array on error
//     }
// }, [jobs, selectedTab, filters, salary]); // Dependencies: Re-run when these values change

// // Effect to trigger the filtering function whenever relevant state changes
// useEffect(() => {
//     // Only run filtering if initial jobs are loaded and not in a loading state
//     if (!loading && jobs) {
//         applyAllFilters();
//     }
// }, [loading, jobs, selectedTab, filters, salary, applyAllFilters]); // Include applyAllFilters as a dependency

export const allFiltersJobFunc = async (filters) => {
    try {
        const token = localStorage.getItem('TokenId')
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const queryParams = new URLSearchParams();

        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== "") {
                queryParams.append(key, value);
            }
        });

        const fullUrl = `${jobAllFilterApi}?${queryParams.toString()}`;

        const response = await axios.get(fullUrl, { headers });


        return response;
    } catch (err) {
        console.log("Error from get Certifications suggestions api", err)
    }
}

export const createResumefunc = async()=>{
     try {
    const token = localStorage.getItem('TokenId');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = {name: "aditya jain", jobTitle: "Full Stack Developer", education: "Graduate b.sc(physics)",skills: "React.js, node.js", experience: "4 years 2 months"}
    const response = await axios.post(createResumeApi, data, {headers});
    if(response){
        return response
    }else{
        showErrorToast("could not create resume")
    }
} catch(e){
    console.log("err",e)
}
    
};


export const searchJobFunc = async (q = '', l = '') => {
  try {
    const token = localStorage.getItem('TokenId');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const query = new URLSearchParams();
    if (q) query.append('q', q);
    if (l) query.append('l', l);

    const response = await axios.get(`${searchJobApi}?${query.toString()}`, {
      headers,
    });

    return response;
  } catch (e) {
    console.error('Error in searchJobFunc:', e);
    return null;
  }
};
