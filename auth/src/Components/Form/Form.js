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
    errors: {
      email: "",
      password: "",
      isAgree: "",
    },
  };

  validateProperty = ({ name, value }) => {
    if (name === "email") {
      if (value.trim() === "") return "Email is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };

  inputHandler = ({ target }) => {
    const { name, value } = target;
    const errors = { ...this.state.errors };
    const msg = this.validateProperty(target);

    if (msg) errors[name] = msg;
    else delete errors[name];

    console.log("input errors ", errors);

    this.setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value,
      },
      errors,
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
    const errors = {};
    const { user } = this.state;
    if (user.email.trim() === "") errors.email = "Email talab qilinadi";
    if (user.password.trim() === "") errors.password = "Password ni kiriting";
    if (!user.isAgree) errors.isAgree = "Iltimos belgilang";

    this.setState({ errors: errors || {} });

    console.log("form submitted", this.state.user);
  };

  render() {
    const { email, password, isAgree, errors } = this.state;
    console.log(this.state, "ona comp");
    return (
      <Form onSubmit={this.submitHandler}>
        <Input
          name="email"
          value={email}
          handler={this.inputHandler}
          type="email"
          label="Enter your email"
          error={errors.email}
        />

        <Input
          name="password"
          value={password}
          handler={this.inputHandler}
          type="password"
          label="Enter your password"
          error={errors.password}
        />
        <Input
          name="isAgree"
          value={isAgree}
          handler={this.checkboxHandler}
          type="checkbox"
          label="Do you agree?"
          error={errors.isAgree}
          isCheckbox
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
