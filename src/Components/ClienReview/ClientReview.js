import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ClientReview = () => {
  return (
    <div className="container">
          <h3>Our Users Review</h3>
          <Row xs={1} md={2} lg={3} className=" p-2 m-2">
          <Col>
     
        <Card className="card g-2 shadow">
          <Card.Img variant="top" src="https://i.ibb.co/sK3csY8/user-1.png" className="rounded-circle w-75 mx-auto pt-3" />
          <Card.Body>
            <Card.Title>Mark Samules</Card.Title>
            <Card.Text>
              I brought Italian Pasta from them they dalivary my food less then 1 hour. I am ver happy by there delivary services.
            </Card.Text>
          </Card.Body>
                      </Card>
              </Col>
              <Col>
        <Card className="card shadow">
          <Card.Img variant="top" src="https://i.ibb.co/XSyndGX/User-2.png" className="rounded-circle w-75 mx-auto pt-3" />
          <Card.Body>
            <Card.Title>Selena James</Card.Title>
            <Card.Text>
              I brought Italian Pizza from them they dalivary my food less then 1 hour. I am ver happy by there delivary services.
            </Card.Text>
          </Card.Body>
          
              </Card>
              </Col>
              <Col>
        <Card className="card shadow">
          <Card.Img variant="top" src="https://i.ibb.co/zGXJBmb/User-3.png " className="rounded-circle w-75 mx-auto pt-3" />
          <Card.Body>
            <Card.Title>Bravo Jen</Card.Title>
            <Card.Text>
            I brought Chicken Tandori from them they dalivary my food less then 1 hour. I am ver happy by there delivary services.

            </Card.Text>
          </Card.Body>
          
        </Card>
     
      </Col>
      </Row>
    </div>
  );
};

export default ClientReview;
