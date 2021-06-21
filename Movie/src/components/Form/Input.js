import React from "react";

const Input = ({ title, type, value, handler, name }) => {
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
    </div>
  );
};

export default Input;
