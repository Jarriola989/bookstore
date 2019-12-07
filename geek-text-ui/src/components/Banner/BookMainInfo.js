import React, { Component } from "react";
import "./BookMainInfo.css";
import ReviewStars from "../ReviewStars/ReviewStars";

export default class BookMainInfo extends Component {
  render() {
    return (
      <div className="col-md-8">
        <h1>The Sun in Your Eyes</h1>
        <div>
          <ReviewStars />
        </div>
        <h5>Price: $25.99</h5>
        <button type="button" className="btn btn-primary">
          Add to Cart
        </button>
        <span className="ml-3">
          <i className="fa fa-heart-o wishList"></i>
          Add to my WishList
        </span>
        <p className="mt-1">Get it as soon as Oct. 4</p>
        <p className="mt-1">ISBN: 0062435590</p>
        <p className="mt-1">
          Publisher: William Morrow Paperbacks; Reprint edition (March 28, 2017)
        </p>
        <span className="mr-3">Genre: Novel</span>
        <span>|</span>
        <span className="ml-3"> Language: English</span>
        <p className="mt-2">
          <strong>Author: Deborah Shapiro (bio)</strong>
        </p>
        <p>
          Deborah Shapiro was born and raised outside of Boston, Massachusetts.
          She spent a number of years in New York working at magazines,
          including New York and ELLE, and her writing has appeared in The New
          York Times Book Review, Los Angeles Review of Books, Sight Unseen,
          Chicago Magazine, Literary Hub, Washington Square Review, and
          elsewhere. Her first novel, The Sun In Your Eyes, was published in
          2016. Her new novel, The Summer Demands was published by Catapult
          Books in 2019. She lives with her husband and son in Chicago.{" "}
        </p>
      </div>
    );
  }
}
