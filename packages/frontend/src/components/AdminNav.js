import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AdminNav() {
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
          <NavLink eventKey="1" as={Link} to="/admin-home">
            Homepage
          </NavLink>
          <NavLink eventKey="3" as={Link} to="/outline-history">
            Outline History
          </NavLink>
          <NavLink eventKey="4" as={Link} to="/admin-add">
            Add Instructor
          </NavLink>
          <NavLink eventKey="5" as={Link} to="/assign">
            Assign Instructor
          </NavLink>
          <NavLink eventKey="6" as={Link} to="/courses">
            Courses
          </NavLink>
          <NavLink eventKey="7" as={Link} to="/departments">
            Departments
          </NavLink>
          <NavLink eventKey="8" as={Link} to="/reviewcourse">
            Review Courses
          </NavLink>
        </Nav>
        <Nav>
          <NavLink eventKey="8" as={Link} to="/">
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
