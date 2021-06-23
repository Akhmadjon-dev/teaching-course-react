import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class SignIn extends Component {
  state = {
    user: {
      email: "",
      password: "",
    },
  };

  inputHandler = (e) => {
    console.log(e.target);
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={this.inputHandler}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={this.inputHandler}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            onChange={this.inputHandler}
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
