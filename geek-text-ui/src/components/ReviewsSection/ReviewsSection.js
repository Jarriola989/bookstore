import React, { Component } from "react";
import ReviewsHeader from "../ReviewsHeader/ReviewsHeader";
import ReviewRow from "../ReviewRow/ReviewRow";

export default class ReviewsSection extends Component {
  render() {
    let totalReviews;
    let avgRating;
    if (typeof this.props.book.reviews !== "undefined") {
      totalReviews = this.props.book.reviews.length;

      avgRating = calculateAvgRating(this.props.book.reviews, totalReviews);
    }

    return (
      <div>
        <div>
          <ReviewsHeader
            book={this.props.book}
            avgRating={avgRating}
            totalReviews={totalReviews}
          />
        </div>
        <div>
          {this.props.book.reviews
            ? this.props.book.reviews.map(review => (
                <ReviewRow review={review} key={review.id} />
              ))
            : undefined}
        </div>
      </div>
    );
  }
}

function calculateAvgRating(reviews, totalReviews) {
  let sum = 0;

  for (let counter = 0; counter < totalReviews; counter++) {
    let review = reviews[counter];
    sum += review.rating;
  }
  return parseInt(sum, 10) / totalReviews;
}
