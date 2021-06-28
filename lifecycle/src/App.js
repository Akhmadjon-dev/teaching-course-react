import React, { Component } from "react";
import Child from "./Child";
import json from "./db/airports.json";
import img from "./assets/img/Vector.png";
import { ReactComponent as Svg } from "./assets/svg/Vector.svg";
import "./styles/app.css";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      counter: 0,
      isShow: false,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    this.setState({ users });
    console.log("main comp mounted", users);
  }

  componentDidUpdate(prevP, state) {
    if (state.counter !== this.state.counter) {
      console.log("ona element updating");
    }
  }

  render() {
    console.log("main comp renderd", this.state.users);
    const { counter, users, isShow } = this.state;
    return (
      <>
        <img style={{ width: "200px", background: "blue" }} src={img} alt="" />
        <Svg />
        {counter}
        <button
          onClick={() =>
            this.setState((prev) => ({ ...prev, counter: prev.counter + 1 }))
          }
        >
          +
        </button>
        <button
          onClick={() =>
            this.setState((prev) => ({ ...prev, isShow: !prev.isShow }))
          }
        >
          Toggle
        </button>
        {isShow && (
          <Child
            obj={{ data: users, counter: counter, name: "jon", age: 22 }}
          />
        )}
      </>
    );
  }
}
