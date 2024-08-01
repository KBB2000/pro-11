import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectRoute = () => {
  const isAuthenticated = localStorage.getItem("loggedin") === "true";

  return (
      isAuthenticated ? <Outlet /> : <Navigate to="/home" />
  );
}

export default ProtectRoute;
