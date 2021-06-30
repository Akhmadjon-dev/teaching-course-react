import React, { Component } from "react";
import Form from "./components/Form";
import List from "./components/List";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: {
        name: "",
        username: "",
        email: "",
        phone: "",
        address: {
          city: "",
        },
        company: {
          name: "",
        },
      },
    };
  }

  // lifecycle
  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    this.setState({ users });
  }

  inputHandler = (e) => {
    const { name, value } = e.target;
    // if(name==='companyName'){
    //   this.setState((prevState) => ({
    //     user: {
    //       ...prevState.user,
    //       address: {
    //         ...prevState.address,

    //       }

    //     },
    //   }));
    // }else{
    // }
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { user } = this.state;
    this.setState((prev) => ({
      users: [{ ...user, id: Date.now() }, ...prev.users],
    }));
  };

  render() {
    console.log(this.state);
    const { users } = this.state;
    return (
      <div className="app">
        <Form submitHandler={this.submitHandler} handler={this.inputHandler} />
        <List data={users} />
      </div>
    );
  }
}
