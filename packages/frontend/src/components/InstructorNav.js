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
          <NavLink eventKey="1" as={Link} to="/home">
            Homepage
          </NavLink>
          <NavLink
            eventKey="3"
            as={Link}
            to="/create-outline/63ca3e5a-78c8-4434-a3c1-8e55ff6127d8"
          >
            Create Outline
          </NavLink>

          <NavLink eventKey="4" as={Link} to="/prev-outlines">
            Previous Outlines
          </NavLink>

          <NavLink eventKey="5" as={Link} to="/edit-outline">
            Edit Outline
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
