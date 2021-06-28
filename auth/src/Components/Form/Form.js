import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Joi from "joi-browser";
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

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
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

  validate = () => {
    const { error } = Joi.validate(this.state.user, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    console.log(error.details);
    return errors;
  };

  submitHandler = (e) => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

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
