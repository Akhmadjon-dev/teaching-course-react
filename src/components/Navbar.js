import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <h3>Movies list {this.props.movies.length} </h3>
      </div>
    );
  }
}
