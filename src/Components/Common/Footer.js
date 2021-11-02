import React from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import {BsFillTelephoneFill, BsYoutube} from 'react-icons/bs';
import {ImFacebook2} from 'react-icons/im';
import {AiFillTwitterCircle} from 'react-icons/ai';
const Footer = () => {
    return (
        <div className='bg-dark text-light pt-5'>
            <Container>
            <Row>
                <Col xs={12} md={4} >
                       <h5>Contact US</h5>
                       <p>56/8, Santa bullevard, Rocky beach, San fransisco, Los angeles, USA</p>
                       <p><BsFillTelephoneFill /> 012-6532-568-9746</p>
                       <p><BsFillTelephoneFill /> 012-6532-568-9756</p>

               </Col>
                <Col xs={12} md={4}>
                <h5>Newsletter</h5>
             <Form className="d-flex">
                <FormControl
                 type="search"
                placeholder="Enter your email Address"
                 className="me-2"
                 aria-label="Search"
                 />
                     <Button variant="outline-success">Search</Button>
            </Form>
  </Col>
                <Col xs={12} md={4} className="pb-3">
                      
                <h5 className="pb-3 pt-3">Follow Us</h5>
                        <a href="https://www.facebook.com/" className="px-3"><ImFacebook2 color="sky-blue" size="30px"/></a>
                        <a href="https://twitter.com/" className="px-3"> <AiFillTwitterCircle color="sky-blue" size="30px"/></a>
                        <a href="https://www.youtube.com/" className="px-3"><BsYoutube color="red" size="30px" /></a>  
                </Col>
            </Row>
            <p className="pb-2 m-0">Copyright ©2021 All rights reserved by FoodMood</p>
            </Container>
        </div>
    );
};

export default Footer;