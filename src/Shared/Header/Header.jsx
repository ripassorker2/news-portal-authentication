import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

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
          <Navbar.Brand className="fs-2 me-lg-5 text-info" href="">
            News portal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" className="text-white fs-5">
                <Link className="text-decoration-none" to={"/home"}>
                  {" "}
                  Home
                </Link>
              </Nav.Link>
              <div className="d-block d-lg-none">
                <LeftSideNav />
              </div>
            </Nav>
            <Nav>
              {user?.uid ? (
                <>
                  <Nav.Link href="" className="text-white fs-5">
                    {user?.uid && (
                      <Link className="text-decoration-none" to={""}>
                        {user?.displayName}
                      </Link>
                    )}
                  </Nav.Link>
                  <Nav.Link href="" className="text-white fs-5">
                    {user?.uid && (
                      <Link className="text-decoration-none" to={""}>
                        <Image
                          roundedCircle
                          style={{ height: "30px" }}
                          src={user?.photoURL}
                        ></Image>
                      </Link>
                    )}
                    <button
                      onClick={logOut}
                      className="btn btn-info rounded-lg btn-sm ms-3"
                    >
                      Log Out
                    </button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="" className="text-white fs-5">
                    <Link className="text-decoration-none" to={"/login"}>
                      Sign In
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="" className="text-white fs-5">
                    <Link className="text-decoration-none" to={"/resister"}>
                      Resistation
                    </Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
