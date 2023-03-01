import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const logOut = () => {
    setUser();
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <div>
      <div>Would you like to logout?</div>
      <Button onClick={logOut}>Logout</Button>
      <Button onClick={() => navigate("/", { replace: true })}>Cancel</Button>
    </div>
  );
};

export default Logout;
