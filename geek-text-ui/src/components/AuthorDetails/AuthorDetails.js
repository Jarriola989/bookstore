import React, { Component } from "react";
import AuthorProfile from "../AuthorProfile/AuthorProfile";

export default class AuthorDetails extends Component {
  constructor(props) {
    super();

    this.state = {
      author: {},
      loading: false,
      error: null
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
        `http://localhost:8090/api/author/${params.authorId}`
      );

      if (response.ok) {
        const dataAuthor = await response.json();

        this.setState({ author: dataAuthor });
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
      <div className="mt-5">
        <span className="mt-5">&nbsp; </span>
        <AuthorProfile state={this.state} />
      </div>
    );
  }
}
