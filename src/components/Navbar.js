import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <h3>Movies list {this.props.movies.length} </h3>
        <h3>Users : {this.props.users.length} </h3>
      </>
    );
  }
}
