import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Input from "./Input";

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
        <Input
          name="email"
          value={email}
          handler={this.inputHandler}
          type="email"
          label="Enter your email"
        />

        <Input
          name="password"
          value={password}
          handler={this.inputHandler}
          type="password"
          label="Enter your password"
        />
        <Input
          name="isAgree"
          value={isAgree}
          handler={this.checkboxHandler}
          type="checkbox"
          label="Do you agree?"
          isCheckbox
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
