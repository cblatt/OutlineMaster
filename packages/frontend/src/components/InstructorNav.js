import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
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
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <NavLink eventKey="1" as={Link} to="/current-courses">
            Current Courses
          </NavLink>

          <NavLink eventKey="2" as={Link} to="/create-outline">
            Create Outline
          </NavLink>

          <NavLink eventKey="3" as={Link} to="/prev-outlines">
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
