import React from "react";
import { Container } from "react-bootstrap";
import Header from "./header";
import Content from "./content";
import Features from "./features";

const Home = () => {
  return (
    <main className="home">
      <Container>
        <Header />
        <Content />
        <Features />
      </Container>
    </main>
  );
};

export default Home;
