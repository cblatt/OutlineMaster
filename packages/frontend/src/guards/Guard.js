import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const AdminGuard = () => {
  const { user } = useAuth();
  if (user ? user.role === "ADMINISTRATOR" : false) {
    return <Outlet />;
  } else {
    return <Navigate to="/unauth" replace />;
  }
};

export const InstructorGuard = () => {
  const { user } = useAuth();
  if (user ? user.role === "INSTRUCTOR" : false) {
    return <Outlet />;
  } else {
    return <Navigate to="/unauth" replace />;
  }
};

export const UserGuard = () => {
  const { user } = useAuth();
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};
