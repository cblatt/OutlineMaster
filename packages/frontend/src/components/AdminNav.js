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
        <Nav>
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
