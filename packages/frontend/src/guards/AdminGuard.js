import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const AdminGuard = () => {
  const { user } = useAuth();
  try {
    if (user.role !== null) {
      if (user.role === "ADMINISTRATOR") {
        return <Outlet />;
      } else if (user.role === "INSTRUCTOR") {
        return <Navigate to="/unauth" replace />;
      }
    }
  } catch (e) {
    return <Navigate to="/unauth" replace />;
  }
};
