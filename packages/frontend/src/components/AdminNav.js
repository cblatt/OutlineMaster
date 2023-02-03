import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import InstructorHome from "./InstructorHome";

export default function AdminNav() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse>
        <Nav>
          <NavLink eventKey="1" as={Link} to="/homepage">
            Homepage
            
          </NavLink>

          <NavLink eventKey="2" as={Link} to="/prev-outlines">
            Previous Outlines
          </NavLink>

          <NavLink eventKey="3" as={Link} to="/outline-history">
            Outline History
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
