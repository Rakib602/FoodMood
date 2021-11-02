import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Foods from './Foods';

const Food = () => {
   const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/foods')
            .then(res => res.json())
        .then(data=>setFoods(data))


    },[])
    return (
        <div className="container">
            <h3 className="mt-3 text-primary"> Our Menu</h3>
            <Row xs={1} md={2} lg={3} className="g-2 m-2">
            {
                foods.map(food => <Foods 
                    key={food._id}
                     food={food}
                ></Foods>)
            }
            </Row>
        </div>
    );
};

export default Food;