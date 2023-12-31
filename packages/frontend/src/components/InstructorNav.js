import { Button } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function InstructorNav() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const logOut = () => {
    setUser();
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Text className="text-white mx-4"> INSTRUCTOR </Navbar.Text>
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <NavLink eventKey="1" as={Link} to="/home">
            Homepage
          </NavLink>
          <NavLink eventKey="3" as={Link} to="/create-outline">
            Create Outline
          </NavLink>

          <NavLink eventKey="4" as={Link} to="/prev-outlines">
            Previous Outlines
          </NavLink>
        </Nav>
        <Nav>
          <NavLink eventKey="4" as={Link} to="/">
            <Button
              className="text-black rounded-md hover:opacity-100"
              onClick={logOut}
            >
              Logout
            </Button>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
