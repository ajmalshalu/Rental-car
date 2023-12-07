import React from 'react'
import {Navbar, Nav,NavDropdown} from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";


const Headers = () => {
  return (
    <Navbar className="Navbaritems bg-light text-light  " expand="lg">
    <Container>
      {/* <img src={img01} height="70px"  alt="" /> */}
      <Navbar.Brand className="navbar-logo " href="/staff" ><h1>ROYAL CARS</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" me-auto " id='nav-menu'>
          <Nav.Link as={Link} to="/Customerbooking">Bookings</Nav.Link>
          <Nav.Link as={Link} to="/Customercontact">Contact</Nav.Link>
          <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/staff" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line">Home</i>
                </Link>

                <Link to="/home" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line">Logout</i> 
                </Link>
              </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar> 
  )
}

export default Headers