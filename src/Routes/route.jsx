import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import NotFound from "../views/NotFound";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import JobDetails from "../components/pages/JobDetailed";
import ProfileFill from "../components/pages/profileFill";
import { ProtectDirectRedirecting, ProtectedRoute, ProtectProfileCreation } from "./RouteProtection";
import LandingPage from "../views/home";
import JobPlatformLandingPage from "../views/Home1";
import { useEffect } from "react";
import { useState } from "react";
import { getJobs, getprofile } from "../API/ApiFunctions";
import JobPortal from "../components/pages/JobFiltering";
import HomePageCandidateProfile from "../components/pages/updateProfile2";



const Layout = () => {

  // const [employee, setEmployee] = useState(null);
  // const [jobs, setJobs] = useState(null)

  const user= JSON.parse(localStorage.getItem("User"));


  // useEffect(() => {

  //   const getData = async () => {
  //     const response = await getprofile();
  //     if (response) {
  //       setEmployee(response?.data.data)

  //     }

  //   }

  //   getData()

  // }, []);

  // useEffect(() => {

  //   const getData = async () => {
  //     const response = await getJobs();
  //     if (response) {
  //       setJobs(response?.data.data)

  //     }

  //   }

  //   getData()

  // }, []);


  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-20 justify-center items-center w-[100vw]">

        <Outlet />
      </div>
      <Footer />
    </>
  )
}

// Main Routes
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Public Route */}
          {/* <Route index element={<LandingPage/>}/> */}
          <Route index element={<JobPlatformLandingPage />} />

          {/* Protected Routes */}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProtectProfileCreation>
                  <ProfileFill />
                </ProtectProfileCreation>

              </ProtectedRoute>
            }
          />
          <Route
            path="jobs"
            element={
              <ProtectedRoute>
                <ProtectDirectRedirecting>
                  <JobPortal />
                </ProtectDirectRedirecting>

              </ProtectedRoute>
            }
          />
          <Route
            path="jobs/:id"
            element={
              <ProtectedRoute>
                <ProtectDirectRedirecting>
                  <JobDetails />
                </ProtectDirectRedirecting>

              </ProtectedRoute>
            }
          />
          <Route
            path="updateProfile"
            element={
              <ProtectedRoute>
                <ProtectDirectRedirecting>
                  <HomePageCandidateProfile />
                </ProtectDirectRedirecting>

              </ProtectedRoute>
            }
          />


        </Route>



        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};


export default AppRoutes;
