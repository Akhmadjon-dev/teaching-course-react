import React from "react";
import { Button, Form } from "react-bootstrap";

const Input = ({ name, type, label, handler, value, isCheckbox, error }) => {
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
        {error && <p style={{ color: "red" }}>{error}</p>}
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
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Form.Group>
    );
  }
};

export default Input;
