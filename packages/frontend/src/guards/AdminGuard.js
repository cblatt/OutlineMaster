import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const AdminGuard = () => {
  const { user } = useAuth();
  return user.role === "ADMINISTRATOR" ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};
