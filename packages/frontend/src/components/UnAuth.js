import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function UnAuth() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const goHome = () => {
    if (user ? user.role === "INSTRUCTOR" : false) {
      navigate("/home");
    } else if (user ? user.role === "ADMINISTRATOR" : false) {
      navigate("/admin-home");
    }
  };

  const logOut = () => {
    setUser();
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h4>
        Sorry your account does not have permission to access this page, would
        you like to login as another user?
      </h4>
      <Button onClick={logOut}>Log Out</Button>
      <Button onClick={goHome}>Go back to home</Button>
    </div>
  );
}
