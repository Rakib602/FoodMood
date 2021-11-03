import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

const AddMenu = () => {
     const nameRef = useRef();
     const priceRef = useRef();
     const imgRef = useRef();
    
    const handelAddUser = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;

        e.preventDefault();
        const newOrder = { name, price, img }
        fetch("http://localhost:4000/newfoods", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Menu Added Successfully')
                    e.target.reset();
            }
        })
    }
    return (
      <div className="container">
        <Row className="w-50 mx-auto m-5">
          <Col className="pt-4 mb-3">
            <form className="Order-form  shadow " onSubmit={handelAddUser}>
              <Row className="p-3 ">
                <h3 className="text-success"> Add your favourite food</h3>
            
                <Col xs={12} md={12} lg={12} className="mx-auto m-2">
                  <input
                    type="text"
                    ref={nameRef}
                    placeholder="Enter the food name"
                  />
                </Col>
                <Col xs={12} md={12} lg={12} className="mx-auto m-2">
                  <input
                    type="number"
                    ref={priceRef}
                    placeholder="Enter  the price of the food"
                  />
                </Col>
                <Col xs={12} md={12} lg={12} className=" mx-auto m-2">
                  <input
                    type="text"
                    ref={imgRef}
                    placeholder="Enter the food image url  "
                  />
                </Col>
              </Row>
              <button className="btn btn-success mb-3" type="submit">
                Add at Menu
              </button>
            </form>
          </Col>
        </Row>
      </div>
    );
};

export default AddMenu;