import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://customcat.com/wp-content/uploads/2022/08/blog-21.png"
          alt="Example"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://editorialist.com/wp-content/uploads/2021/09/Bucket-Hat-Outfit-_-Holding_Social-Media.jpg"
          alt="Example"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.saymedia-content.com/.image/t_share/MTc2MjcyODQwNjA4MTk1NzU3/howhautecouturehijackedstreetwear.jpg"
          alt="Example"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
