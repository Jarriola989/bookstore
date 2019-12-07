import React, { Component } from "react";
import BookMainContainer from "../BookMainContainer/BookMainContainer";
import BookDescription from "../BookDescription/BookDescription";
import ReviewsSection from "../ReviewsSection/ReviewsSection";
import ReviewRow from "../ReviewRow/ReviewRow";
import { Link } from "react-router-dom";

export default class BookDetails extends Component {
  constructor(props) {
    super();

    this.state = {
      book: {},
      authors: [],
      loading: false,
      error: null,
      loggedIn: props.loggedIn,
      user: props.user
    };

    // Binding methods to class
    this.fetchData = this.fetchData.bind(this);
  }

  // Fetch a book from the API
  async fetchData() {
    try {
      let {
        match: { params }
      } = this.props;

      const response = await fetch(
        `http://localhost:8090/api/books/${params.bookId}`
      );
      const responseAuthors = await fetch(
        `http://localhost:8090/api/author/book/${params.bookId}`
      );

      if (response.ok && responseAuthors.ok) {
        const dataBooks = await response.json();
        const dataAuthors = await responseAuthors.json();
        let Authors = getAuthors(dataAuthors);

        this.setState({ book: dataBooks });
        this.setState({ authors: Authors });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      this.setState({ error, isLoading: false });
      console.log("error!");
      console.error(error);
    }
  }

  async componentDidMount() {
    let {
      match: { params }
    } = this.props;

    this.setState({ loading: true });
    this.fetchData();
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        <BookMainContainer
          state={this.state}
          loggedIn={this.state.loggedIn}
          user={this.state.user}
        />
        <BookDescription description={this.state.book.description} />
        <ReviewsSection book={this.state.book} />
      </div>
    );
  }
}

function getAuthors(data) {
  let authors = new Array();

  for (let counter = 0; counter < data.length; counter++) {
    let author = {
      id: data[counter].id,
      name: data[counter].name
    };
    authors.push(author);
  }
  return authors;
}
