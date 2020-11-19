import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const CallToAction = () => {
  return (
    <section className="call-to-action py-5" id="cta">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col sm={12} md={10} lg={6}>
            <div>
              <p>35,000+ already joined</p>
              <h3 className="mb-4">
                Stay up-to-date with what <br />
                we’re doing
              </h3>
              <Form className="row align-items-center">
                <Col sm={12} md={8} lg={8}>
                  <Form.Group>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} md={4} lg={4}>
                  <Form.Group>
                    <button className="call-to-action__btn ease">
                      Contact Us
                    </button>
                  </Form.Group>
                </Col>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToAction;
