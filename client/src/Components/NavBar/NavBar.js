import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormControl, Form } from "react-bootstrap";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";
const NavBar = ({}) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/Dashbord/Add">Publish</Link>
        <NavbarToggler />
        <Collapse>
          <Nav className="mr-auto" navbar></Nav>
        </Collapse>
        <Nav className="mr-auto" navbar>
          <Link
            to="/Dashbord"
            style={{
              padding: "40%",
            }}
          >
            Home
          </Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search Drinks"
            className="mr-sm-2"
            onChange={() => {}}
          />
        </Form>
      </Navbar>
    </div>
  );
};

export default NavBar;
