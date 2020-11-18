import React from "react";
import { Container } from "react-bootstrap";
import Header from "./header";
import Content from "./content";

const Home = () => {
  return (
    <main className="home">
      <Container>
        <Header />
        <Content />
      </Container>
    </main>
  );
};

export default Home;
