import React from "react";
import { Container, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-4">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <div className="brand d-flex align-items-center">
            <a href="#">
              <img src={"https://via.placeholder.com/150x50"} alt="logo" />
            </a>
            <nav>
              <a className="mx-2 p-2 ease" href="#features">
                Features
              </a>
              <a className="mx-2 p-2 ease" href="#pricing">
                Pricing
              </a>
              <a className="mx-2 p-2 ease" href="#contact">
                Contact
              </a>
            </nav>
          </div>
          <div className="socials">
            <a
              className="mx-3 ease"
              target="_blank"
              href="https://www.facebook.com/silvertechguy"
            >
              <Image
                className="socials__icon"
                src={"https://via.placeholder.com/35"}
                alt="facebook"
              />
            </a>
            <a
              className="mx-3 ease"
              target="_blank"
              href="https://twitter.com/silvertechyguy"
            >
              <Image
                className="socials__icon"
                src={"https://via.placeholder.com/35"}
                alt="twitter"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
