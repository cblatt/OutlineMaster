import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
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
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-300 ...">
      <div className="pt-20 pl-20 flex justify-center">
        <Card align="center" size="md" className="w-1/2 flex justify-center">
          <CardHeader>
            <Heading size="lg">Sorry!</Heading>
          </CardHeader>
          <CardBody>
            <h4 className="text-lg text-center">
              Looks like your account does not have permission to access this
              page, would you like to login as another user?
            </h4>
          </CardBody>
          <CardFooter>
            <Button onClick={goHome} className="mr-8" colorScheme="purple">
              Go back to home
            </Button>
            <Button onClick={logOut} colorScheme="purple">
              Log Out
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
