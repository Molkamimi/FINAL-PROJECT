import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormControl, Form, Button } from "react-bootstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

const NavBar = ({ setSearch }) => {
  return (
    <div>
      <Navbar
        expand="md"
        className="mr-3"
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "black",
        }}
      >
        <Link to="/Dashbord/Add" style={{ color: "blue" }}>
          Home
        </Link>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link
                to="/Dashbord"
                style={{
                  padding: "10%",
                  color: "blue",
                }}
              >
                {" "}
                Publish
              </Link>
            </NavItem>
          </Nav>

          <NavbarText>
            <Button
              style={{
                fontSize: "medium",
                color: "rgb(29, 69, 248)",
                fontStyle: "italic",
                backgroundColor: "rgb(29, 69, 248)",
              }}
            >
              <div
                className="btn btn-primary px-5"
                style={{ backgroundColor: "black", borderColor: "black" }}
              >
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </Form>
              </div>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
