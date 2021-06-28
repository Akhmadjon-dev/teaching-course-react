import React, { Component } from "react";

import "./styles/child.css";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "child" };
    console.log("chil constructor, ");
  }

  componentDidMount() {
    console.log("child comp mounted");
  }

  componentDidUpdate(prevProps, next) {
    if (prevProps.count !== this.props.obj.count) {
      console.log("teng mas");
    }
  }

  componentWillUnmount() {
    console.log("child comp removed destroyed");
  }

  render() {
    console.log("child comp rendered", this.props.obj.count);
    return (
      <>
        {this.props.obj.data.map((item) => (
          <li key={item.id}>{item.username}</li>
        ))}
        
      </>
    );
  }
}
