import React, { useEffect, useState } from "react";
import JobCard from "../ui/jobCard";
import Sidebar from "../ui/sidebar";
import { Grid2x2Plus, IndianRupee, LayoutGrid, MapPin } from "lucide-react";
import { Skeleton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../../Redux/getData";
import {
  allFiltersJobFunc,
  jobfilter,
  jobfilterBySalary,
} from "../../API/ApiFunctions";
import { showErrorToast } from "../ui/toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SimpleJobCard } from "../ui/advertiseCard";
import { useNavigate } from "react-router-dom";

//  Updated ToggleTabs component with dynamic icon coloring
const ToggleTabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = ["All Jobs", "For You", "High Salary", "Nearby"];

  const getIcon = (tab, isSelected) => {
    const iconClass = isSelected ? "text-white" : "text-secondary";

    switch (tab) {
      case "All Jobs":
        return <Grid2x2Plus className={iconClass} size={18} />;
      case "For You":
        return <LayoutGrid className={iconClass} size={18} />;
      case "High Salary":
        return <IndianRupee className={iconClass} size={18} />;
      case "Nearby":
        return <MapPin className={iconClass} size={18} />;

      default:
        return null;
    }
  };

  return (
    <div className="flex gap-2 p-4">
      {tabs.map((tab) => {
        const isSelected = selectedTab === tab;
        return (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-2 py-1 rounded-md flex items-center gap-2 ${
              isSelected
                ? "bg-secondary text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            {getIcon(tab, isSelected)}
            <span className="text-14">{tab}</span>
          </button>
        );
      })}
    </div>
  );
};

export default function JobPortal() {
  const [filters, setFilters] = useState({
    datePosted: "All",
    distance: "All",
  });
  const [selectedTab, setSelectedTab] = useState("All Jobs");
  const [salary, setSalary] = useState(75000);
  const [isOpen, setIsOpen] = useState(true);
  const [showfilters, setShowfilters] = useState(false);
  const [jobss, setJobs] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const { jobs, loading, error } = useSelector((state) => state.getDataReducer);

  useEffect(() => {
    const getdata = async () => {
      if (selectedTab == "For You") {
        const response = await jobfilter();
        if (response) {
          setJobs(response.data.data);
        }
      } else if (selectedTab == "High Salary") {
        const response = await jobfilterBySalary();
        if (response) {
          setJobs(response.data.data);
        }
      } else {
        setJobs(jobs ? jobs : null);
      }
    };

    getdata();
  }, [jobs, selectedTab]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = (e) => {
      setIsOpen(!e.matches);
    };

    if (mediaQuery.matches) {
      setIsOpen(false);
    }

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await allFiltersJobFunc(filters);
      if (response) {
        setJobs(response.data.data);
      } else {
        showErrorToast("Couldn't apply filter");
      }
    };

    getData();
  }, [filters]);

  if (loading)
    return (
      <div className="flex justify-center items-center w-full min-h-[80vh] bg-black/20">
        <img
          src="/unigrowLogo.png"
          alt="logo"
          className="w-40 h-16 animate-heartbeat"
        />
      </div>
    );

  return (
    <>
      {isOpen ? (
        // Desktop View
        <div className="flex flex-row gap-8 w-full min-h-screen px-4">
          <div className="flex flex-col mt-4 w-1/3 max-w-[250px]">
            <h2 className="font-medium text-6 text-gray-800 ml-4">Filters</h2>
            <Sidebar
              filters={filters}
              setFilters={setFilters}
              salary={salary}
              setSalary={setSalary}
            />
          </div>

          <div
            className="w-full max-h-[100vh] overflow-scroll md:w-2/4 p-4"
            style={{ scrollbarWidth: "none" }}
          >
            <h1 className="text-16 font-medium mb-4 text-gray-800">
              Showing {jobss?.length} jobs based on your profile
            </h1>
            <ToggleTabs
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            <div className="flex flex-col gap-6 mt-4">
              {jobss ? (
                jobss.map((job, i) => <JobCard key={i} job={job} />)
              ) : (
                <div className="flex flex-col gap-4">
                  {" "}
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={"100%"}
                    height={200}
                    sx={{ margin: 0, borderRadius: "10px" }}
                  />{" "}
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={200}
                    sx={{ margin: 0, borderRadius: "10px" }}
                  />{" "}
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={200}
                    sx={{ margin: 0, borderRadius: "10px" }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="w-full max-w-[250px] mt-2 ">
            {jobss && jobss.some((job) => job.jobPlan === "Hot") && (
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="h-[0.1%]"
              >
                {jobss
                  .filter((job) => job.jobPlan === "Hot")
                  .map((job, i) => (
                    <SwiperSlide key={i}>
                      <SimpleJobCard
                        job={job}
                        onClick={() => navigate(`/jobs/${job.id}`)}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) }
          </div>
        </div>
      ) : (
        // Mobile View
        <div className="flex flex-col items-start min-h-screen  ">
          <button
            onClick={() => setShowfilters(!showfilters)}
            className={`m-4 mb-0 px-2 py-1 rounded-md flex items-center gap-2 ${
              showfilters
                ? "bg-secondary text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            <span className="text-14">Filters</span>
          </button>

          {showfilters && (
            <div className="fixed inset-0 z-50 flex justify-center items-end">
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black bg-opacity-40"
                onClick={() => setShowfilters(false)}
              />

              {/* Drawer */}
              <div className="relative w-full max-w-md bg-white rounded-t-2xl shadow-lg transform transition-transform duration-300 ease-in-out translate-y-0 animate-slideUp">
                <div className="flex justify-between items-center p-4 border-b">
                  <h2 className="text-base font-semibold">Filters</h2>
                  <button
                    onClick={() => setShowfilters(false)}
                    className="text-gray-500 text-sm font-medium"
                  >
                    ✕
                  </button>
                </div>
                <div
                  className="overflow-scroll"
                  style={{ scrollbarWidth: "none" }}
                >
                  <ToggleTabs
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                  />
                </div>
                <div className="p-4 max-h-[75vh] overflow-y-auto">
                  <Sidebar
                    filters={filters}
                    setFilters={setFilters}
                    salary={salary}
                    setSalary={setSalary}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="w-full max-w-[90vw] mt-2">
            {jobss && (
              <Swiper
                direction="vertical"
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="h-[1px] relative" 
              >
                {jobss
                  .filter((job) => job.jobPlan === "Hot")
                  .map((job, i) => (
                    <SwiperSlide key={i}>
                      <SimpleJobCard
                        job={job}
                        onClick={() => navigate(`/jobs/${job.id}`)}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
          </div>
          <div className="w-full md:w-3/4 p-4">
            <h1 className="text-16 font-medium mb-4 text-gray-800">
              Showing {jobss?.length} jobs based on your profile
            </h1>
            {/* <ToggleTabs
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            /> */}
            <div className="flex flex-col gap-4">
              {jobss?.map((job, i) => (
                <JobCard key={i} job={job} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
