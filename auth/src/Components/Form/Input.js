import React from "react";
import { Button, Form } from "react-bootstrap";

const Input = ({ name, type, label, handler, value, isCheckbox }) => {
  if (isCheckbox) {
    return (
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          onChange={handler}
          type={type}
          name={name}
          checked={value}
          label={label}
        />
      </Form.Group>
    );
  } else {
    return (
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          onChange={handler}
          type={type}
          name={name}
          value={value}
          placeholder={label}
        />
      </Form.Group>
    );
  }
};

export default Input;
