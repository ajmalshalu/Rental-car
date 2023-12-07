import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav,NavDropdown} from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
// import img01 from "../../assets/all-images/slider-img/RC.jpg"

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/login",
    display: "Login",
  }
];

const Header = () => {
  

  return (
    <Navbar className="Navbaritems bg-light text-light  " expand="lg">
    <Container>
      {/* <img src={img01} height="70px"  alt="" /> */}
      <Navbar.Brand className="navbar-logo " href="/" ><h1>ROYAL CARS</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" me-auto " id='nav-menu'>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
          <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/login" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="/signup" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar> 
  );
};

export default Header;
