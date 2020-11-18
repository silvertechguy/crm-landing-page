import React from "react";
import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";

const Faqs = () => {
  return (
    <section className="questions py-5" id="questions">
      <Container>
        <article className="text-center py-3">
          <h3>Frequently Asked Questions</h3>
          <p className="my-3">
            Here are some of our FAQs. If you have any other questions <br />
            you’d like answered please feel free to email us.
          </p>
        </article>
        <Row className="justify-content-center">
          <Col sm={12} md={10} lg={6}>
            <div>
              <Accordion className="accordion mt-4 mb-5" id="accordion">
                <Card className="card">
                  <section className="card-header">
                    <h2 className="mb-0">
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        What is CRM ?
                      </Accordion.Toggle>
                    </h2>
                  </section>
                  <Accordion.Collapse eventKey="0">
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce tincidunt justo eget ultricies fringilla.
                        Phasellus blandit ipsum quis quam ornare mattis.
                      </p>
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card className="card">
                  <section className="card-header">
                    <h2 className="mb-0">
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        How can I request a new browser?
                      </Accordion.Toggle>
                    </h2>
                  </section>
                  <Accordion.Collapse eventKey="1">
                    <div className="card-body">
                      <p>
                        Vivamus luctus eros aliquet convallis ultricies. Mauris
                        augue massa, ultricies non ligula. Suspendisse
                        imperdiet. Vivamus luctus eros aliquet convallis
                        ultricies. Mauris augue massa, ultricies non ligula.
                        Suspendisse imperdie tVivamus luctus eros aliquet
                        convallis ultricies. Mauris augue massa, ultricies non
                        ligula. Suspendisse imperdiet.
                      </p>
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card className="card">
                  <section className="card-header">
                    <h2 className="mb-0">
                      <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Is there a mobile app?
                      </Accordion.Toggle>
                    </h2>
                  </section>
                  <Accordion.Collapse eventKey="2">
                    <div className="card-body">
                      <p>
                        Sed consectetur quam id neque fermentum accumsan.
                        Praesent luctus vestibulum dolor, ut condimentum urna
                        vulputate eget. Cras in ligula quis est pharetra mattis
                        sit amet pharetra purus. Sed sollicitudin ex et
                        ultricies bibendum.
                      </p>
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card className="card">
                  <section className="card-header">
                    <h2 className="mb-0">
                      <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        What about other Chromium browsers?
                      </Accordion.Toggle>
                    </h2>
                  </section>
                  <Accordion.Collapse eventKey="3">
                    <div className="card-body">
                      <p>
                        Integer condimentum ipsum id imperdiet finibus. Vivamus
                        in placerat mi, at euismod dui. Aliquam vitae neque eget
                        nisl gravida pellentesque non ut velit.
                      </p>
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <section className="d-block text-center">
                <button className="btn-active ease">More Info</button>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;
