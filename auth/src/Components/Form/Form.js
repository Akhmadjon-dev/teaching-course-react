import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class SignIn extends Component {
  state = {
    user: {
      email: "",
      password: "",
      isAgree: null,
    },
  };

  inputHandler = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  checkboxHandler = (e) => {
    const { checked, name } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: checked,
      },
    }));
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted", this.state.user);
  };

  render() {
    const { email, password, isAgree } = this.state;
    return (
      <Form onSubmit={this.submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={this.inputHandler}
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={this.inputHandler}
            name="password"
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            onChange={this.checkboxHandler}
            type="checkbox"
            name="isAgree"
            checked={isAgree}
            label="Do you agree?"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
