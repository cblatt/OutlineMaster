import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminNav() {
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

          <NavLink eventKey="2" as={Link} to="/prev-outlines">
            Previous Outlines
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
        </Nav>
        <Nav>
          <NavLink eventKey="6" as={Link} to="/logout">
            Log Out
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
