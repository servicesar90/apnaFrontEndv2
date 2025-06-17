import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import {  Menu, X } from "lucide-react";
import CandidateLoginModal from "../modals/loginModals/CandidateLoginModal";
import OtpModal from "../modals/loginModals/OtpModal";
import ProfileModal from "../modals/profileModals/profileModal";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, fetchUserProfile } from "../../Redux/getData";
import { motion } from "framer-motion";

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
        <div className="hidden md:flex justify-center ml-auto items-center gap-8 flex flex-row">

           {["Home", "Jobs", "Features", "About Us", "Contact Us"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer relative group"
                  whileHover={{ y: -2 }}
                  onClick={() => navigate(`/${item.replace(" ","-")}`)}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0c39cf] group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              )
            )}
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
        <ListItem button component={Link} to="/Features" onClick={() => setIsMenuOpen(false)}>
          <ListItemText primary="Features" />
        </ListItem>
        <ListItem button component={Link} to="/about-us" onClick={() => setIsMenuOpen(false)}>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component={Link} to="/Contact-us" onClick={() => setIsMenuOpen(false)}>
          <ListItemText primary="Contact Us" />
        </ListItem>
     
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
