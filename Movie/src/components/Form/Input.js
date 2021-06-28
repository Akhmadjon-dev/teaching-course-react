import React from "react";

const Input = ({ title, type, value, handler, name, error }) => {
  console.log(error, "bola comp");
  return (
    <div className="form__element">
      <label className="form__label" htmlFor="title">
        {title}
      </label>
      <input
        className="form__input"
        name={name}
        type={type ? type : "text"}
        value={value}
        onChange={handler}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Input;
