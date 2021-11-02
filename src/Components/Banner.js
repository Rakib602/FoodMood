import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/NZ8VWHr/Banner-1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Food-Mood</h1>
            <p>
              Eat breakfast like a king.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/BsXwvrJ/Banner-2.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Food-Mood</h1>
            <p>Lunch like a prince.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/DRgKNxd/Banner-3.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Food-Mood</h1>
            <p> Dinner like a pauper.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;