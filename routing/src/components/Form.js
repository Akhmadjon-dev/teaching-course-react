import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handler, submitHandler } = this.props;
    return (
      <>
        <h2>Add User</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
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
      </>
    );
  }
}
