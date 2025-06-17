
import { Menu,  Box,  CardContent, Avatar, Button,Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileModal = ({ showProfileModal, profile, anchor, onClose, handleLogout }) => {

  const navigate = useNavigate();


  return (
    <Menu
      anchorEl={anchor}
      open={showProfileModal}
      onClose={onClose}
      PaperProps={{
        className: "w-64 p-4",
        elevation: 4,
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {/* <Paper className="p-2"> */}
        
          <CardContent sx={{ textAlign: "center" }}>
            <Avatar
              src="" // Add profile image src
              alt={profile?.fullName}
              sx={{ width: 80, height: 80, margin: "0 auto", mb: 2 }}
            >
              {profile?.fullName?.trim()?.charAt(0).toUpperCase()}
            </Avatar>

            <Typography variant="h6" fontWeight="600">
              {profile?.fullName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profile?.EmployeeExperiences?.[0]?.jobTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {profile?.EmployeeExperiences?.[0]?.companyName}
            </Typography>

            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                onClose()
                navigate("/updateProfile")

              }
              }
              sx={{ mt: 2, borderRadius: "999px", textTransform: "none" }}
            >
              Update Profile
            </Button>

            <Box mt={2}>
              <button
                onClick={handleLogout}
                className="bg-secondary text-white px-2 py-1 rounded-md text-[0.9rem] font-semibold"
              >
                Logout
              </button>
            </Box>
          </CardContent>
       
    
    </Menu>
  );
};

export default ProfileModal;
