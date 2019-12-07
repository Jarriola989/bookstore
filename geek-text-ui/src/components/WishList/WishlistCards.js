import React, { Component } from "react";
import {
  Card,
  Button,
  ButtonToolbar,
  Dropdown,
  SplitButton
} from "react-bootstrap";

class WishlistCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Books: props.Books,
      handleDelete: props.handleDelete,
      handleMove: props.handleMove,
      handleMoveToCart: props.handleMoveToCart,
      Options: props.Options
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      Books: nextProps.Books,
      Options: nextProps.Options
    });
  }

  render() {
    if (this.state.Books.length === 0) {
      return (
        <Card
          className="p-3"
          style={{
            top: "80px",
            width: "800px",
            left: "30%"
          }}
        >
          <Card.Body>
            <h1> List is empty </h1>
          </Card.Body>
        </Card>
      );
    } else {
      let listcard = this.state.Books.map(item => (
        <div>
          <Card
            className="p-3"
            style={{
              top: "80px",
              width: "800px",
              left: "30%"
            }}
          >
            <Card.Body>
              <img
                src={item.img_url}
                height="150"
                width="100"
                padding="20px"
                alt="book cover"
              />
              <ButtonToolbar
                style={{
                  position: "absolute",
                  right: "70px",
                  top: "80px"
                }}
              >
                <SplitButton
                  title="Move to Cart"
                  onClick={e => this.state.handleMoveToCart()}
                >
                  {this.state.Options.map(option => (
                    <Dropdown.Item
                      value={option.listid}
                      onClick={e =>
                        this.state.handleMove(option.listid, item.id)
                      }
                    >
                      {option.listName}
                    </Dropdown.Item>
                  ))}
                </SplitButton>
              </ButtonToolbar>
              <Button
                style={{
                  position: "absolute",
                  right: "70px",
                  top: "120px"
                }}
                onClick={e => this.state.handleDelete(item.id)}
              >
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_55372.png"
                  height="25"
                />
              </Button>
              <br />
              <Card.Text
                className="text-center"
                style={{
                  position: "absolute",
                  top: "70px",
                  left: "200px",
                  maxWidth: "350px"
                }}
              >
                <p1
                  style={{
                    fontweight: "bold",
                    maxWidth: "10px"
                  }}
                >
                  {item.title}
                </p1>
                {item.author}
                <br />${item.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ));
      return listcard;
    }
  }
}

export default WishlistCards;
