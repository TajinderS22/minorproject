import { Navigate } from "react-router";
import UserContext, { useAuth } from "../../Utils/UserContext";
import React, { useContext } from 'react';

export const ProtectedRoute=({children} )=> {
    const {isUserLogedIn}=useContext(UserContext)
    return isUserLogedIn? children :<Navigate to="/auth"/>
  
}

export default ProtectedRoute;