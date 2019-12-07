import React, { Component } from "react";
import WishlistNavbar from "./WishlistNavbar";
import WishlistCards from "./WishlistCards";
import {
  Card,
  Button,
  ButtonToolbar,
  Dropdown,
  SplitButton
} from "react-bootstrap";

class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.user.id,
      Lists: [],
      LoggedInStatus: props.LoggedInStatus,
      currentList: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleMoveToCart = this.handleMoveToCart.bind(this);
    this.handleDeleteWishlist = this.handleDeleteWishlist.bind(this);
    this.fetchWishlists = this.fetchWishlists.bind(this);
  }

  async fetchWishlists() {
    try {
      const response = await fetch(
        `http://localhost:8090/api/users/wishlist/${this.state.userId}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({ Lists: data });
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
    this.fetchWishlists();
  }

  async handleCreate(listName) {
    try {
      const response = await fetch(
        `http://localhost:8090/api/users/addWishlist/${listName}/${this.state.userId}`,
        { method: "PUT" }
      );
      if (response.ok) {
        let temp = await response.json();
        temp[temp.length - 1].books = [];
        this.setState({ Lists: temp, currentList: temp.length - 1 });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      this.setState({ error, isLoading: false });
      console.log("error!");
      console.error(error);
    }
  }

  async handleDeleteWishlist(list_id, userId) {
    try {
      const response = await fetch(
        `http://localhost:8090/api/users/removeWishlist/${list_id}/${userId}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        let temp = await response.json();
        this.setState({ currentList: 0 });
        this.setState({ Lists: temp });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      console.log("error!");
      console.error(error);
    }
  }

  handleClick(listName, newList) {
    if (newList === true) {
      this.handleCreate(listName);
    } else if (listName === this.state.Lists[0].name) {
      this.setState({
        currentList: 0
      });
    } else if (listName === this.state.Lists[1].name) {
      this.setState({
        currentList: 1
      });
    } else if (listName === this.state.Lists[2].name) {
      this.setState({
        currentList: 2
      });
    }
  }

  async handleDelete(book_id) {
    try {
      const response = await fetch(
        `http://localhost:8090/api/wishlist/removeBook/${
          this.state.Lists[this.state.currentList].id
        }/${book_id}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        let temp = this.state.Lists;
        temp[this.state.currentList] = await response.json();
        this.setState({ Lists: temp });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      this.setState({ error, isLoading: false });
      console.log("error!");
      console.error(error);
    }
  }

  handleMoveToCart() {
    console.log("To be implemented");
  }

  async handleMove(destList, book_id) {
    try {
      const response = await fetch(
        `http://localhost:8090/api/wishlist/moveBook/${
          this.state.Lists[this.state.currentList].id
        }/${destList}/${book_id}/1`,
        { method: "PUT" }
      );

      if (response.ok) {
        let temp = await response.json();
        temp.sort((a, b) => (a.id > b.id ? 1 : -1));
        this.setState({ Lists: temp });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      this.setState({ error, isLoading: false });
      console.log("error!");
      console.error(error);
    }
  }

  render() {
    let Options = [{}];
    for (let i = 0; i < this.state.Lists.length; i++) {
      if (i !== this.state.currentList) {
        Options.push({
          listName: this.state.Lists[i].name,
          listid: this.state.Lists[i].id
        });
      }
    }

    let cards = <h1></h1>;
    if (this.state.userId === undefined) {
      cards = (
        <Card
          className="p-3"
          style={{
            top: "80px",
            width: "800px",
            left: "30%"
          }}
        >
          <Card.Body>
            <h1 style={{ position: "relative", left: "20%" }}>
              User in not logged in
            </h1>
          </Card.Body>
        </Card>
      );
    } else if (this.state.Lists.length === 0) {
      cards = (
        <Card
          className="p-3"
          style={{
            top: "80px",
            width: "800px",
            left: "30%"
          }}
        >
          <Card.Body>
            <h1 style={{ position: "relative", left: "20%" }}>
              No lists exists for this user
            </h1>
          </Card.Body>
        </Card>
      );
    } else {
      cards = (
        <WishlistCards
          Books={this.state.Lists[this.state.currentList].books}
          handleDelete={this.handleDelete}
          handleMove={this.handleMove}
          handleMoveToCart={this.handleMoveToCart}
          Options={Options}
        />
      );
    }

    return (
      <div>
        <div>
          <WishlistNavbar
            LoggedInStatus={this.state.LoggedInStatus}
            Lists={this.state.Lists}
            handleClick={this.handleClick}
            handleDelete={this.handleDeleteWishlist}
            userId={this.state.userId}
            default={
              this.state.Lists.length > 0 ? this.state.Lists[0].ListName : null
            }
          />
          {cards}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default WishList;
