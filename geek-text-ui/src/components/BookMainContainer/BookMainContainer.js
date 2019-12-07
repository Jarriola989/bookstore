import React, { Component } from "react";
import BookMainPhoto from "../BookMainPhoto/BookMainPhoto";
import BookMainInfo from "../BookMainInfo/BookMainInfo";

export default class BookMainContainer extends Component {
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row mt-4">
            <div className="col">
              <BookMainPhoto photoURL={this.props.state.book.img_url} />
            </div>
            <div className="col">
              <BookMainInfo
                state={this.props.state}
                loggedIn={this.props.loggedIn}
                user={this.props.user}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
