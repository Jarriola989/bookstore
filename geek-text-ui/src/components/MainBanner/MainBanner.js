import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function MainBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./imgs/banner1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>A Better Book Store</h1>
          <h2>Find all your tech books in one place.</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./imgs/banner2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
