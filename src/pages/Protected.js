import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const access = localStorage.getItem("access_code");
  console.log(access);
  if (!access) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
