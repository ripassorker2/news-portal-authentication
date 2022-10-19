import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
        className="shadow mb-5"
      >
        <Container>
          <Navbar.Brand className="fs-2 me-lg-5 text-info" href="#home">
            News portal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="text-white fs-5">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white fs-5">
                News
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white fs-5"></Nav.Link>
              <NavDropdown
                title="Catagory"
                id="collasible-nav-dropdown"
                className="text-white fs-5"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <div className="d-block d-lg-none">
                <LeftSideNav />
              </div>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="text-white fs-5">
                Sign In
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="text-white fs-5">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
