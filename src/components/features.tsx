import React from "react";
import { Col, Container, Image, Nav, Row, Tab } from "react-bootstrap";

const features = () => {
  return (
    <section className="features py-4" id="features">
      <Container>
        <article className="text-center py-3">
          <h3>Features</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ae <br />
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aen <br />
            Lorem ipsum dolor sit amet, conse
          </p>
        </article>
        <section className="features__content">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="justify-content-center mb-3">
              <Nav.Item>
                <Nav.Link eventKey="first">easy to use and to scale 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  easy to use and to scale 2
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">easy to use and to scale 3</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="my-5">
              <Tab.Pane eventKey="first">
                <Row className="align-items-center">
                  <Col md={12} lg={6} className="mb-4">
                    <div>
                      <Image
                        src={"https://via.placeholder.com/500x300"}
                        alt="features"
                        fluid
                      />
                    </div>
                  </Col>
                  <Col md={12} lg={6} className="mb-4">
                    <article>
                      <h3>Lorem ipsum dolor sit</h3>
                      <p className="my-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis.
                      </p>
                      <button className="btn-active ease">More Info</button>
                    </article>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row className="align-items-center">
                  <Col md={12} lg={6} className="mb-4">
                    <div>
                      <Image
                        src={"https://via.placeholder.com/500x300"}
                        alt="features"
                        fluid
                      />
                    </div>
                  </Col>
                  <Col md={12} lg={6} className="mb-4">
                    <article>
                      <h3>Lorem ipsum dolor sit</h3>
                      <p className="my-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis.
                      </p>
                      <button className="btn-active ease">More Info</button>
                    </article>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Row className="align-items-center">
                  <Col md={12} lg={6} className="mb-4">
                    <div>
                      <Image
                        src={"https://via.placeholder.com/500x300"}
                        alt="features"
                        fluid
                      />
                    </div>
                  </Col>
                  <Col md={12} lg={6} className="mb-4">
                    <article>
                      <h3>Lorem ipsum dolor sit</h3>
                      <p className="my-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis.
                      </p>
                      <button className="btn-active ease">More Info</button>
                    </article>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </section>
      </Container>
    </section>
  );
};

export default features;
