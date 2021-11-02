import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './OurMission.css';
const OurMission = () => {
    return (
    <div className="container">
      <Row>
        <Col xs={12} lg={6}>
          <img
            src="https://i.ibb.co/3RrSBmC/3697355.jpg"
            alt=""
            srcset=""
            className="img-fluid"
          />
        </Col>
        <Col xs={12} lg={6}>
           
          <p className="mission-text">
            <h3>Our Mission</h3>
            Bringing good food into your everyday. That's our mission. That
            means we don't just deliver--we bring it, always going the extra
            mile to make your experience memorable. And it means this is
            delicious food you can enjoy everyday: from vibrant salads for
            healthy office lunches, to indulgent family-sized pizzas, to fresh
            sushi for a romantic night in. Whatever you crave, we can help."
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default OurMission;