import React, { Component } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "../styles/components/Header.style";

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Link className="header__link" to="/">
          Home
        </Link>
        <Link className="header__link" to="/users">
          Users
        </Link>
        <Link className="header__link" to="/add">
          Add
        </Link>
      </StyledHeader>
    );
  }
}
