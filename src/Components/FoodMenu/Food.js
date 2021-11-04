import React, { useEffect, useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Foods from './Foods';

const Food = () => {
    const { isLoding } = useAuth();
    if (isLoding) {
        <Spinner animation = "border" variant = "primary"/>
    }
   const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch("https://quiet-crag-48473.herokuapp.com/foods")
          .then((res) => res.json())
          .then((data) => setFoods(data));


    },[])
    return (
      <div className="container">
        <h3 className="mt-3 text-primary"> Our Menu</h3>
        {foods.length < 1 ? (
          <Spinner
            as="span"
            animation="border"
            variant="success"
            size="md"
            role="status"
            aria-hidden="true"
          />
        ) : (
          <Row xs={1} md={2} lg={3} className="g-2 m-2">
            {foods.map((food) => (
              <Foods key={food._id} food={food}></Foods>
            ))}
          </Row>
        )}
      </div>
    );
};

export default Food;