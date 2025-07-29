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
import JobPlatformLandingPage from "../views/Home1";
import JobPortal from "../components/pages/JobFiltering";
import HomePageCandidateProfile from "../components/pages/updateProfile2";
import Features from "../components/ui/features";
import Index from "../components/ui/aboutUs";
import ContactUs from "../components/ui/contactUs";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Call } from "@mui/icons-material";




const Layout = () => {

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-20 justify-center items-center w-[100vw]">

        <Outlet />
      </div>

         <Box
        sx={{
          position: "fixed",
          right: "5vw",
          bottom: "10vh",
          zIndex: 1000,
        }}
         onClick={()=> window.location.href = `tel:${9211336926}`}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(90deg, #003B70, #0784C9)", // replace with your theme color
            padding: "12px",
            borderRadius: "50%",
            display: "inline-block",
          }}
        >
          <Call sx={{color: "white"}} />
        </motion.div>
      </Box>
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
          <Route path="Home" element={<JobPlatformLandingPage />} />
          <Route path="Features" element={<Features />} />
          <Route path="About-us" element={<Index />} />
          <Route path="contact-us" element={<ContactUs />} />

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
