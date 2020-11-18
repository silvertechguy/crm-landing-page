import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header className="py-4">
      <Navbar expand="lg">
        <Navbar.Brand>
          <Nav.Link href="#logo" className="ease">
            <Image src={"https://via.placeholder.com/150x50"} alt="logo" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="ml-auto">
            <Nav.Link href="#features" className="ease">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="ease">
              Pricing
            </Nav.Link>
            <Nav.Link href="#contact" className="ease">
              Contact
            </Nav.Link>
            <Nav.Link href="#login" className="active ease">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
