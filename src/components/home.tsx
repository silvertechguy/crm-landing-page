import React from "react";
import { Container } from "react-bootstrap";
import Header from "./header";
import Content from "./content";
import Features from "./features";
import Pricing from "./pricing";
import Faqs from "./faqs";
import CallToAction from "./call-to-action";
import Footer from "./footer";

const Home = () => {
  return (
    <main className="home">
      <Container>
        <Header />
        <Content />
        <Features />
        <Pricing />
        <Faqs />
      </Container>
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Home;
