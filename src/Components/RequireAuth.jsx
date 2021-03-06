import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context/AuthContext";


export const RequireAuth = ({children}) => {
  const location = useLocation();
  const { userDetailes } = useAuth();
  const { token } = userDetailes;
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
