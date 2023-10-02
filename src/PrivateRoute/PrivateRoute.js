import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// import { UserContext } from "../App";

localStorage.setItem("isAuthenticated", JSON.stringify(true));
function PrivateRoute() {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
