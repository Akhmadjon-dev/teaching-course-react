import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FlexWrap } from "../styles";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.ref.current.focus();
  }

  render() {
    const { handler, submitHandler } = this.props;
    return (
      <FlexWrap ai="flex-start" jc="space-around" style={{ width: "100%" }}>
        <h2>Add User</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              ref={this.ref}
              onChange={handler}
              type="text"
              name="username"
              placeholder="Enter user name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handler}
              type="text"
              name="name"
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handler}
              type="email"
              name="email"
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={handler}
              type="tel"
              name="phone"
              placeholder="Phone"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={handler}
              type="text"
              name="address"
              placeholder="Address"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Company</Form.Label>
            <Form.Control
              onChange={handler}
              type="text"
              name="company.name"
              placeholder="Company name"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </FlexWrap>
    );
  }
}
