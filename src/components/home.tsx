import React from "react";
import { Container } from "react-bootstrap";
import Header from "./header";
import Content from "./content";
import Features from "./features";
import Pricing from "./pricing";

const Home = () => {
  return (
    <main className="home">
      <Container>
        <Header />
        <Content />
        <Features />
        <Pricing />
      </Container>
    </main>
  );
};

export default Home;
