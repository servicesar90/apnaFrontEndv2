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
import UseLocation from "../components/pages/useLocation";



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
        <Route path="/location" element={<UseLocation />} />
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
