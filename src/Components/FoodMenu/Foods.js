import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Foods.css';
const Foods = ({ food }) => {
    const { _id,name, img, prices } = food;
    return (
        <div>
            <Col className="card-body w-75 mx-auto">
                <Card className="card shadow" >
                    <Card.Img variant="top" src={img} className="rounded-circle w-75 mx-auto pt-3" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Price: {prices} TK</Card.Text>
                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-primary"> Order Now</button>
                        </Link>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Foods;