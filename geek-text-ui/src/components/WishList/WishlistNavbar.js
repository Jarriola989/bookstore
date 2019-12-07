import React, { Component } from "react";
import {
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup,
  Modal,
  Button,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl
} from "react-bootstrap";

class WishlistNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Lists: props.Lists,
      userId: props.userId,
      newList: "New List",
      modalShow: false,
      loggedInStatus: props.loggedInStatus,
      handleClick: props.handleClick,
      handleDelete: props.handleDelete
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ newList: event.target.value });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      Lists: nextProps.Lists
    });
  }
  render() {
    if (this.state.Lists.length >= 3 && this.state.userId !== undefined) {
      return (
        <ButtonToolbar>
          <ToggleButtonGroup
            style={{ top: "80px", width: "800px", left: "30%" }}
            type="radio"
            name="options"
            defaultValue={1}
          >
            {this.state.Lists.map(item => (
              <ToggleButton
                variant="light"
                value={item.name}
                onClick={e => {
                  this.state.handleClick(item.name, false);
                }}
              >
                {item.name}
              </ToggleButton>
            ))}
            <DropdownButton
              id="dropdown-basic-button"
              title="Delete list"
              variant="light"
            >
              {this.state.Lists.map(item => (
                <Dropdown.Item
                  variant="light"
                  value={item.name}
                  onClick={e => {
                    this.state.handleDelete(item.id, this.state.userId);
                    this.setState({ modalShow: false });
                  }}
                >
                  {item.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      );
    } else if (
      this.state.Lists.length === 0 &&
      this.state.userId !== undefined
    ) {
      return (
        <ButtonToolbar>
          <ToggleButtonGroup
            style={{ top: "80px", width: "800px", left: "30%" }}
            type="radio"
            name="options"
            defaultValue={"Create List"}
          >
            <ToggleButton
              variant="light"
              value={"Create List"}
              onClick={() => this.setState({ modalShow: true })}
            >
              Add List
            </ToggleButton>

            <Modal
              show={this.state.modalShow}
              onHide={() => this.setState({ modalShow: false })}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Add List
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="List name"
                    aria-label="name"
                    aria-describedby="name"
                    style={{ width: "300px" }}
                    value={this.state.newList}
                    onChange={this.handleChange}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text
                      onClick={e =>
                        this.state.handleClick(this.state.newList, true)
                      }
                      id="name"
                    >
                      Create List
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.state.onHide}>Cancel </Button>
              </Modal.Footer>
            </Modal>
          </ToggleButtonGroup>
        </ButtonToolbar>
      );
    } else if (this.state.userId !== undefined) {
      return (
        <ButtonToolbar>
          <ToggleButtonGroup
            style={{ top: "80px", width: "800px", left: "30%" }}
            type="radio"
            name="options"
            defaultValue={this.state.default}
          >
            {this.state.Lists.map(item => (
              <ToggleButton
                variant="light"
                value={this.state.Lists[0].name}
                onClick={e => {
                  this.state.handleClick(item.name, false);
                }}
              >
                {item.name}
              </ToggleButton>
            ))}
            <ToggleButton
              variant="light"
              value={"Create List"}
              onClick={() => this.setState({ modalShow: true })}
            >
              Add List
            </ToggleButton>

            <Modal
              show={this.state.modalShow}
              onHide={() => this.setState({ modalShow: false })}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Add List
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="List name"
                    aria-label="name"
                    aria-describedby="name"
                    style={{ width: "300px" }}
                    value={this.state.newList}
                    onChange={this.handleChange}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text
                      onClick={e =>
                        this.state.handleClick(this.state.newList, true)
                      }
                      id="name"
                    >
                      Create List
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.state.onHide}>Cancel </Button>
              </Modal.Footer>
            </Modal>
            <DropdownButton
              id="dropdown-basic-button"
              title="Delete list"
              variant="light"
            >
              {this.state.Lists.map(item => (
                <Dropdown.Item
                  variant="light"
                  value={item.name}
                  onClick={e => {
                    this.state.handleDelete(item.id, this.state.userId);
                  }}
                >
                  {item.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      );
    } else {
      return <div></div>;
    }
  }
}

export default WishlistNavbar;
