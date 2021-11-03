import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { user } = useAuth();

    const orderIdRef = useRef();
    const itemNameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const addressRef = useRef();
    


    const handelOrder = e => {
    
        const OrderId = orderIdRef.current.value;
        const itemName = itemNameRef.current.value;
        const userName = userNameRef.current.value;
        const email = emailRef.current.value;
        const phoneNumber = phoneNumberRef.current.value;
        const address = addressRef.current.value;

        e.preventDefault();

        const newOrder = { itemName, userName, email, address, phoneNumber }
        fetch('http://localhost:4000/orders', {
            method: 'POST',
            headers: {
             'content-type': 'application/json'
            },
         body: JSON.stringify(newOrder)   
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Ordered Booked Successfully')
                    e.target.reset();
            }
        })
}

    const {foodId}=useParams();
    const [orders,setOrders]=useState([]);

    const [order,setOrder]=useState({});


    useEffect(()=> {
        fetch('http://localhost:4000/foods')
        .then(res=> res.json())
        .then(data=> setOrders(data))
    },[])

    useEffect(()=>{
        const foundOrder = orders.find(order=> order._id == foodId)
        setOrder(foundOrder);
        console.log(foundOrder)
    },[orders])
 
    return (
      <div className="container">
        <Row xs={1} md={2} lg={2} className="mt-5 pt-3">
          <Col className=" text-dark fw-bold pb-5">
            <Card className="card g-2 mx-auto shadow w-100">
              <Card.Img
                className="img-fluid mx-auto mt-3 p-1 rounded-circle"
                style={{ width: 300 }}
                variant="top"
                src={order?.img}
              />
              <Card.Body>
                <Card.Title> Order ID: {order?._id}</Card.Title>
                <Card.Text> Item: {order?.name}</Card.Text>
                <Card.Text> Price: {order?.prices}</Card.Text>
                <Link to="/home">
                  <button className="btn btn-danger">Choose other item</button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <form className="Order-form  m-3 shadow " onSubmit={handelOrder}>
              <Row className="pt-3 ">
                <h3>Book your order</h3>
                <Col xs={12} md={12} lg={12} className=" mx-auto m-2">
                  Order ID:
                  <input
                    type="text"
                    defaultValue={foodId}
                    ref={orderIdRef}
                    placeholder="OrderId"
                  />
                </Col>
                <Col xs={12} md={12} lg={12} className="mx-auto m-2">
                  Item Name:
                  <input
                    type="text"
                    defaultValue={order?.name}
                    ref={itemNameRef}
                  />
                </Col>
                <Col xs={12} md={12} lg={12} className="mx-auto m-2">
                  Customer Name:
                  <input
                    type="text"
                    defaultValue={user.displayName}
                    ref={userNameRef}
                    placeholder="Enter Name "
                  />
                </Col>
                <Col xs={12} md={12} lg={12} className=" mx-auto m-2">
                  Email:
                  <input
                    type="text"
                    defaultValue={user.email}
                    ref={emailRef}
                    placeholder="Enter Email "
                  />
                </Col>
                <Col xs={12} md={12} lg={12} className="mx-auto m-2">
                  Phone Number:
                  <input
                    type="text"
                    required
                    ref={phoneNumberRef}
                    placeholder="Enter your phone number"
                  />
                </Col>
                <Col xs={12} md={12} lg={12} className=" m-2">
                  Address:
                  <input
                    type="text"
                    required
                    ref={addressRef}
                    placeholder="Enter Your Current Address"
                  />
                </Col>
              </Row>
              <button className="btn btn-success m-2" type="submit">
                Order Now
              </button>
            </form>
          </Col>
        </Row>
      </div>
    );
};

export default Booking;