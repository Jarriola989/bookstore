import React, { Component } from "react";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import BooksGrid from "./components/BooksGrid/BooksGrid";
import BookPage from "./components/BookPage/BookPage";
import BookDetails from "./components/BookDetails/BookDetails";
import AuthorDetails from "./components/AuthorDetails/AuthorDetails";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import TopSeller from "./components/TopSeller/TopSeller";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";
import HighRating from "./components/HighRating/HighRating";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import MyAccount from "./components/MyAccount/MyAccount";
import Programming from "./components/Genres/Programming";
import Robotics from "./components/Genres/Robotics";
import Network from "./components/Genres/Network";
import AI from "./components/Genres/AI";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "Sign in.",
      userId: null,
      customerId: "",
      user: {}
    };
    this.handleLoginStatus = this.handleLoginStatus.bind(this);
    this.handleLogoutStatus = this.handleLogoutStatus.bind(this);
  }

  componentWillMount() {
    //pull from local storage
    localStorage.getItem("loggedInUser") &&
      this.setState({
        user: JSON.parse(localStorage.getItem("loggedInUser"))
      });
    localStorage.getItem("userId") &&
      this.setState({
        userId: JSON.parse(localStorage.getItem("userId"))
      });
    localStorage.getItem("loggedInStatus") &&
      this.setState({
        loggedInStatus: JSON.parse(localStorage.getItem("loggedInStatus"))
      });
    localStorage.getItem("customerId") &&
      this.setState({
        customerId: JSON.parse(localStorage.getItem("customerId"))
      });
  }

  componentWillUpdate(nextProps, nextState) {
    //save to local storage
    localStorage.setItem("loggedInUser", JSON.stringify(nextState.user));
    localStorage.setItem("userId", JSON.stringify(nextState.userId));
    localStorage.setItem(
      "loggedInStatus",
      JSON.stringify(nextState.loggedInStatus)
    );
    localStorage.setItem("customerId",JSON.stringify(nextState.customerId))
    localStorage.setItem("stateTime", Date.now()); //time-stamp
  }

  handleLoginStatus(data) {
    this.setState({
      loggedInStatus: data.first_name,
      userId: data.id,
      customerId: data.customerId,
      user: data
    });
  }

  handleLogoutStatus() {
    this.setState({
      loggedInStatus: "Sign in.",
      userId: null,
      customerId: null,
      user: {}
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" render={props => <Header {...props} loggedInStatus={this.state.loggedInStatus} handleLogoutStatus={this.handleLogoutStatus} /> } />
        <Route exact path="/" render={props => <HomePage {...props} />} />
        <Route path="/login" render={props => <LoginRegister {...props} handleLoginStatus={this.handleLoginStatus} /> } />
        <Route path="/myaccount" render={props => <MyAccount {...props} currentUser={this.state.userId} 
                                                                        customerId={this.state.customerId} 
                                                                        loggedInStatus={this.state.loggedInStatus} /> } />
        <Route path="/bookgrid" component={BooksGrid} />
        <Route exact path="/books" component={BookPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/books/top" component={TopSeller} />
        <Route path="/books/rating" component={HighRating} />
        <Route path="/books/genre/Programming" component={Programming} />
        <Route path="/books/genre/Robotics" component={Robotics} />
        <Route path="/books/genre/Network" component={Network} />
        <Route path="/books/genre/Artificial_Intelligence" component={AI} />
        <Route
          path="/wishlist"
          render={props => (
            <WishList
              {...props}
              loggedInStatus={this.state.loggedInStatus}
              user={this.state.user}
            />
          )}
        />
        <Route
          path="/book/:bookId"
          render={props => (
            <BookDetails
              {...props}
              loggedIn={this.state.loggedInStatus}
              user={this.state.user}
            />
          )}
        />
        <Route path="/author/:authorId" component={AuthorDetails} />
        <Route path="/" component={Footer} />
      </BrowserRouter>
    );
  }
}

export default App;
