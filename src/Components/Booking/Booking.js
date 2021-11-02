import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
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
        <div>
            <Col className=" text-dark fw-bold">
      <Card className="" border="warning"> 
        <Card.Img className="img mx-auto mt-3 p-1" style={{width:300}} variant="top" src={order?.img} />
        <Card.Body>
                        <Card.Title> Order ID: {order?._id}</Card.Title>
                        <Card.Text> Item: {order?.name}</Card.Text>
          <Card.Text> Price: {order?.prices}</Card.Text>
       <Link to="/home"><button className="btn btn-danger">Back To Home</button></Link>
        </Card.Body>
      </Card>
    </Col>    
        </div>
    );
};

export default Booking;