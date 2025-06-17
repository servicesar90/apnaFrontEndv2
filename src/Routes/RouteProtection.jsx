import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("TokenId");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export const ProtectProfileCreation = ({children}) =>{
  const user = localStorage.getItem("User");

  if (user){
    const newUser= JSON.parse(user);

    if(newUser.profile){
      return <Navigate to="/jobs" replace />;
    }else{
      return children
    }
  }else{
    return <Navigate to="/" replace />;
  }
}

export const ProtectDirectRedirecting = ({children}) =>{
  const user = localStorage.getItem("User");

  if (user){
    const newUser= JSON.parse(user);

    if(newUser.profile){
      return children
    }else{
      return <Navigate to="/profile" replace />;
    }
  }else{
    return <Navigate to="/" replace />;
  }
}
