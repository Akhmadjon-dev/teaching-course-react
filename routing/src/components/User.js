import React, { Component } from "react";

export default class User extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    const user = await data.json();
    this.setState({ user });
  }

  render() {
    console.log(this.state.user);
    const { user } = this.state;
    return (
      <>
        <h2>Name {user.name}</h2>
      </>
    );
  }
}
