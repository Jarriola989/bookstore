import React, { Component } from "react";
import "./BookMainInfo.css";
import ReviewStars from "../ReviewStars/ReviewStars";
import BookDetailsPublishers from "../BookDetailsPublishers/BookDetailsPublishers";
import { NavLink } from "react-router-dom";
import AddBook from "../WishList/AddBook";

export default class BookMainInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      loggedIn: props.loggedIn,
      modalShow: false
    };
  }

  render() {
    const book = this.props.state.book;
    const authors = this.props.state.authors;
    const loading = this.props.state.loading;
    const error = this.props.state.error;

    let totalReviews;
    let avgRating;
    if (this.props.state.book.reviews !== undefined) {
      const reviews = this.props.state.book.reviews;
      totalReviews = reviews.length;

      avgRating = calculateAvgRating(reviews, totalReviews);
    }
    //console.log("bookid " + this.state.bookId);

    return (
      <div className="mt-5">
        {error ? <h2> {error.message}</h2> : null}
        {loading ? <h2> {spinner()} </h2> : <h2> {book.title} </h2>}

        <div className="mt-3">
          <span>
            <ReviewStars avgRating={avgRating} />
          </span>
          <span>({totalReviews} Reviews)</span>
        </div>
        <h5 className="mt-3">Price: ${loading ? spinner() : book.price}</h5>
        <button type="button" className="btn btn-primary btn-lg mt-3 mb-3">
          <strong>Add to Cart</strong>
        </button>
        <span className="ml-3">
          <i
            className="fa fa-heart-o wishList mr-1 ml-3"
            onClick={() => this.setState({ modalShow: true })}
          ></i>
          Add to my WishList
        </span>
        <AddBook
          userId={this.state.user.id}
          loggedIn={this.state.loggedIn}
          bookId={this.props.state.book.id}
          modalShow={this.state.modalShow}
        />
        <p className="mt-1">
          <i className="fab fa-usps fa-2x text-primary mr-2 "></i>
          Get it as soon as {deliveryDate()}
        </p>
        <p className="mt-1">
          <span className="font-weight-bold">ISBN: </span>{" "}
          {loading ? spinner() : book.isbn}
        </p>
        <p className="mt-1">
          <span className="font-weight-bold">Publication date: </span>{" "}
          {loading ? spinner() : book.date}
        </p>

        <p className="mt-1 ">
          <BookDetailsPublishers
            bookPublishers={book.publishers ? book.publishers : undefined}
          />
        </p>
        <span className="mr-3">
          <span className="font-weight-bold">Genre: </span>{" "}
          {book.genre ? book.genre.name : undefined}
        </span>

        <p className="mt-3">
          <span className="font-weight-bold">Author: </span>

          {authors
            ? authors.map(author => {
                return (
                  <NavLink
                    exact
                    to={"/author/" + author.id}
                    style={{ textDecoration: "none" }}
                    id={author.id}
                  >
                    <span className="mr-3">{author.name} </span>
                  </NavLink>
                );
              })
            : undefined}
        </p>
      </div>
    );
  }
}

function spinner() {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

function addDays(date, days) {
  const copy = new Date(Number(date));
  copy.setDate(date.getDate() + days);
  return copy;
}

function deliveryDate() {
  const days = 3;
  const date = new Date();
  const newDate = addDays(date, days);
  return newDate
    .toUTCString()
    .split(" ")
    .slice(0, 4)
    .map(a => a.concat(" "));
}

function calculateAvgRating(reviews, totalReviews) {
  let sum = 0;

  for (let counter = 0; counter < totalReviews; counter++) {
    let review = reviews[counter];
    sum += review.rating;
  }
  return parseInt(sum, 10) / totalReviews;
}
