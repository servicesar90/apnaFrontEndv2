import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import {  Menu, X } from "lucide-react";
import CandidateLoginModal from "../modals/loginModals/CandidateLoginModal";
import OtpModal from "../modals/loginModals/OtpModal";
import ProfileModal from "../modals/profileModals/profileModal";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, fetchUserProfile } from "../../Redux/getData";

export default function Navbar() {
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [mobile, setMobile] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [showProfileModal, setShowProfileModal]= useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [anchor, setAnchor]= useState(null);
  const [profile, setProfile]= useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();
   const {employee, loading} = useSelector((state)=>state.getDataReducer);

     const storedUser = localStorage.getItem('User');


 useEffect(() => {
  
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setIsLoggedIn(true);

      if (user.profile && !employee) {
        dispatch(fetchUserProfile());
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [dispatch, storedUser, employee]);


  useEffect(() => {
    if (employee) {
      setProfile(employee);
    }
  }, [employee]);



  const handleEmployerLogin = () => {
    navigate("/employer-login");
  };

  const handleLogout = () => {
    localStorage.removeItem("TokenId");
    localStorage.removeItem("User");
    dispatch(deleteEmployee())
    setIsLoggedIn(false);
    setShowProfileModal(false);
    setProfile(null)
    setMobile("");
    navigate("/");
  };


  const services = [
    {
      title: "AI Resume builder",
      subtitle: "Create your best resume using AI",
      link: "/ai-resume-builder",
    },
    {
      title: "AI Resume checker",
      subtitle: "Get instant resume feedback",
      link: "/ai-resume-checker",
    },
    {
      title: "AI Cover letter generator",
      subtitle: "Stand out and get hired faster",
      link: "/ai-cover-letter-generator",
    },
    {
      title: "Direct connection with recruiter",
      subtitle: "Stand out and get hired faster",
      link: "/recruiter-connection",
    },
    {
      title: "Blog",
      subtitle: "Guidance for securing your dream job",
      link: "/blog",
    },
  ];


  return (
    <>
      <nav className="bg-white fixed top-0 z-50 shadow flex justify-between w-full h-20 items-center p-4">
        

        <img onClick={() => navigate("/")} src="/unigrowLogo.png" className="w-[7rem] h-auto cursor-pointer" alt="Logo" />



        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center ml-auto items-center gap-4 flex flex-row">

          <div className=" flex  flex-row gap-4">
            <Link to="/" className="font-semibold text-16 text-gray-800">Home</Link>
          </div>

            <div
              className="relative"
              // onMouseEnter={() => setIsCareerOpen(true)}
              // onMouseLeave={() => setIsCareerOpen(false)}
              onClick={()=>navigate("/jobs")}
            >
              <button className="flex items-center gap-1 font-semibold text-16 text-gray-800">
                Find A Job 
                {/* <ChevronDown size={16} /> */}
              </button>
              {isCareerOpen && (
                <div className="absolute top-10 left-0 bg-white shadow-lg p-4 flex gap-6 rounded-md z-50 w-[600px]">
                  <div className="space-y-4 text-sm text-[#666666] font-medium w-1/2">
                    {services.map(({ title, subtitle, link }, i) => (
                      <Link
                        to={link}
                        key={i}
                        className="text-left w-full px-2 py-1 hover:bg-gray-100 rounded block"
                      >
                        <strong>{title}</strong><br />
                        <span className="text-gray-500">{subtitle}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="w-1/2 space-y-2">
                    <img src="/assets/career-video-thumbnail.jpg" alt="Career Compass Video" className="rounded-md" />
                    <p className="text-sm font-medium text-[#666666]">
                      Level up your resume: Watch our career compass video guide.
                    </p>
                    <Link to="/career-compass-video" className="text-[#3C78D8] font-semibold text-sm">
                      Watch video →
                    </Link>
                  </div>
                </div>
              )}
            </div>
        </div> 


          <div className="flex items-center gap-4 ml-auto">
            {!isLoggedIn ? (
              <div className="flex flex-row gap-2">
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="bg-secondary text-white px-1 md:px-2 py-1 rounded-md text-[0.8rem] md:text-16 font-medium"
                >
                  Candidate Login
                </button>
                <button
                  onClick={handleEmployerLogin}
                  disabled
                  className="text-secondary hover:text-white cursor-pointer bg-white px-1 md:px-2 py-1 rounded-md text-[0.8rem] md:text-16  font-medium hover:bg-secondary transition-colors duration-300 "
                >
                  Employer Login
                </button>
              </div>
            ) : (
              <div>
                {profile ? 
                <div onClick={(e)=>{
                  setAnchor(e.currentTarget);
                  setShowProfileModal(!showProfileModal)
                  
                }
                } className="rounded-[50%] flex justify-center items-center bg-secondary text-white py-3 px-5">
                  <strong>{profile?.fullName?.trim()?.charAt(0).toUpperCase()}</strong>
                </div> :
                  <button
                    onClick={handleLogout}
                    className="bg-secondary text-white px-2 py-1 rounded-md text-16 font-medium"
                  >
                    Logout
                  </button>
                }

              </div>

            )}
          </div>

            <div className="lg:hidden md:hidden flex flex">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md focus:outline-none"
                aria-label="Toggle Menu"
              >
                <Menu size={24} />
              </button>
            </div>

        

        
      </nav>

      {/* Mobile Menu */}
    <Drawer
      anchor="right"
      open={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: '50%',
          maxWidth: 300,
          padding: '1.5rem',
        },
      }}
    >
      <IconButton
        onClick={() => setIsMenuOpen(false)}
        sx={{ position: 'absolute', top: 10, right: 10 }}
      >
        <X />
      </IconButton>

      <List sx={{ marginTop: 6 }}>
        <ListItem button component={Link} to="/" onClick={() => setIsMenuOpen(false)}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/updateProfile" onClick={() => setIsMenuOpen(false)}>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="/jobs" onClick={() => setIsMenuOpen(false)}>
          <ListItemText primary="Jobs" />
        </ListItem>
        {/* Uncomment if needed */}
        {/* <ListItem button component={Link} to="/contact-us" onClick={() => setIsMenuOpen(false)}>
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button component={Link} to="/about-us" onClick={() => setIsMenuOpen(false)}>
          <ListItemText primary="About Us" />
        </ListItem> */}
      </List>
    </Drawer>

      {/* Modals */}
      {showLoginModal && (
        <CandidateLoginModal
          mobile={mobile}
          setMobile={setMobile}
          onClose={() => {
            setShowLoginModal(false);
          }}
          onSubmit={() => {
            setShowOtp(true);
            setShowLoginModal(false)
          }}
        />
      )}
      {showOtp && <OtpModal mobile={mobile} onClose={() => setShowOtp(false)} onSubmit={() => {
        setIsLoggedIn(true)

      }} />}

      {showProfileModal && (
        <ProfileModal showProfileModal={showProfileModal} onClose={()=> setShowProfileModal(!showProfileModal)} profile={profile} anchor={anchor} handleLogout={handleLogout}/>
      )}

    
    </>
  );
}
