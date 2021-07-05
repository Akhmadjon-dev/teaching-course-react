import React, { Component } from "react";

export default class User extends Component {
  state = {
    user: {
      address: {
        city: "",
      },
    },
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
    const { user } = this.state;

    return (
      <>
        <h2>Name {user.name}</h2>
        <h2>phone {user.phone}</h2>
        <h2>city {user.address.city}</h2>
      </>
    );
  }
}
