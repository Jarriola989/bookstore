import React, { Component } from "react";
import { Dropdown, Modal, Button } from "react-bootstrap";

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: props.userId,
      bookId: props.bookId,
      loggedIn: props.loggedIn,
      modalShow: props.modalShow,
      handleClick: props.handleClick,
      Lists: []
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      modalShow: nextProps.modalShow,
      bookId: nextProps.bookId
    });
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `http://localhost:8090/api/users/wishlist/${this.state.userId}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log("user id " + this.state.userId);
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

  async handleAdd(bookId, wishlistId) {
    this.setState({ modalShow: false });
    try {
      const response = await fetch(
        `http://localhost:8090/api/wishlist/addBook/${wishlistId}/${bookId}`,
        { method: "PUT" }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
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
    let modal;
    if (this.state.loggedIn === "Not logged in") {
      modal = (
        <Modal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>User in not logged in</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ modalShow: false })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else {
      let Options = [{}];
      for (let i = 0; i < this.state.Lists.length; i++) {
        Options.push(
          <Dropdown.Item
            onClick={e =>
              this.handleAdd(this.state.bookId, this.state.Lists[i].id)
            }
          >
            {this.state.Lists[i].name}
          </Dropdown.Item>
        );
      }
      modal = (
        <Modal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Available lists
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {this.state.Lists.map(option => (
                    <Dropdown.Item
                      value={option.id}
                      onClick={e =>
                        this.handleAdd(this.state.bookId, option.id)
                      }
                    >
                      {option.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ modalShow: false })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
    return <div>{modal}</div>;
  }
}
export default AddBook;
