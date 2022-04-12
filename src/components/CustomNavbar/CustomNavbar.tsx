import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Logo } from "..";


import './CustomNavbar.scss'

export default function CustomNavbar() {

  return (
    <Navbar expand="lg" id="custom-navbar">
      <Container>
        <Navbar.Brand href="#"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Our Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#businessPlan">Business Plan</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
          <div className="navbar-controls">
            <Button variant="outline-danger">Login</Button>
            <Button variant="danger">Get Started</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}