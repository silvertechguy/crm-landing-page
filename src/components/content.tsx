import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const Content = () => {
  return (
    <Row className="py-4 home__content">
      <Col md={12} lg={6} className="mb-3">
        <article className="home__content__text">
          <h1>Lorem ipsum dolor sit ame</h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et m
          </p>
          <button className="btn-active ease">Lorem ipsum dolo</button>
          <button className="btn-default ease">Lorem ipsum dolor</button>
        </article>
      </Col>
      <Col md={12} lg={6} className="mb-3">
        <div>
          <Image src={"https://via.placeholder.com/500"} fluid alt="hero" />
        </div>
      </Col>
    </Row>
  );
};

export default Content;
