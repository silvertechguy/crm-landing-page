import React from "react";
import { Container } from "react-bootstrap";
import Header from "./header";
import Content from "./content";
import Features from "./features";
import Pricing from "./pricing";
import Faqs from "./faqs";

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
    </main>
  );
};

export default Home;
