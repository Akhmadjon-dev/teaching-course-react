import React, { Component } from "react";
import qry from "query-string";
export default class Search extends Component {
  render() {
    const user = qry.parse(this.props.location.search);
    console.log(user, "user");
    return (
      <>
        search
        <h3>user: {user.name} </h3>
      </>
    );
  }
}
