import React, { Component } from "react";

export default class Switch extends Component {
  render() {
    const { switchHandler, isUpdate } = this.props;
    return (
      <button onClick={switchHandler}>{isUpdate ? "Hide" : "Show"}</button>
    );
  }
}
