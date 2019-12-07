import React, { Component } from "react";
import BookGrid from "../BooksGrid/BooksGrid";
import "./HomePage.css";
import MainBanner from "../MainBanner/MainBanner";

class HomePage extends Component {
  constructor(props) {
    super();

    this.state = {
      books: [],
      loading: false,
      error: null
    };

    // Binding methods to class
    this.fetchFeaturedBooks = this.fetchFeaturedBooks.bind(this);
  }

  // Fetch a book from the API
  async fetchFeaturedBooks() {
    try {
      const response = await fetch("http://localhost:8090/api/");

      if (response.ok) {
        const data = await response.json();
        this.setState({ books: data });
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
    this.setState({ loading: true });
    this.fetchFeaturedBooks();
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        <MainBanner />
        <div className="homepage">
          <div className="home-title">
            <h2>Featured Books</h2>
            <br />
          </div>
          <BookGrid data={this.state.books} />
          <br />
        </div>
      </div>
    );
  }
}

export default HomePage;
