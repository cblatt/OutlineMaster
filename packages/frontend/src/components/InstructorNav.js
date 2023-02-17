import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function InstructorNav() {
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

          <NavLink eventKey="2" as={Link} to="/homepage">
            Create Outline
          </NavLink>

          <NavLink eventKey="3" as={Link} to="/prev-outlines">
            Previous Outlines
          </NavLink>
        </Nav>
        <Nav>
          <NavLink eventKey="4" as={Link} to="/logout">
            Log Out
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
