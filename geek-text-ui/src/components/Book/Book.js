import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Book.css';
import ReviewStars from "../BookStars/BookStars";

export default function Book(props) {
  const reviews = props.book.reviews;
  const totalReviews = reviews.length;

  let avgRating = calculateAvgRating(reviews, totalReviews);

  return (
      <div class = "card">
        <div class = "link">
          <NavLink exact to={"/book/" + props.book.id} > 
            <img src={props.book.img_url} width="100%" height="100%" />
          </NavLink>
        </div>
        <div class = "title">
          <p > 
            {shortTitle (props.book.title)}    </p>
        </div>
          <p > 
            <div class = "stars"> <ReviewStars totalReviews={totalReviews} avgRating={avgRating} /> </div>
            Price: ${props.book.price} 
          </p>
        
        
      </div>
  );
}

function calculateAvgRating(reviews, totalReviews) {
  let sum = 0;

  for (let counter = 0; counter < totalReviews; counter++) {
    let review = reviews[counter];
    sum += review.rating;
  }
  return parseInt(sum, 10) / totalReviews;
}

function shortTitle (title) {
  let lastSpace = 0;
  if (title.length > 42) {                    //44 is about the size for two lines, I dont want it to go over 2 lines for formatting reasons
    title = title.slice(0,42)
    lastSpace = title.lastIndexOf(' ');
    title = title.slice(0, lastSpace) + "...";
  }
  return title;
}

      
        
      
   



