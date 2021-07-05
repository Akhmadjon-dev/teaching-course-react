import React, { Component, createRef } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import Header from "./components/Header";
import Home from "./components/Home";
import List from "./components/List";
import Search from "./components/Search";
import User from "./components/User";
import { Main, Section } from "./styles";

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
    this.linkRef = createRef();
  }

  // lifecycle
  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    this.setState({ users });
  }

  inputHandler = (e) => {
    const { name, value } = e.target;

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
      user: {},
    }));
    this.linkRef.current.click();
  };

  render() {
    const { users } = this.state;
    return (
      <Main>
        <Header />
        <Section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/search" component={Search} />
            <Route
              exact
              path="/add"
              render={(props) => (
                <Form
                  {...props}
                  submitHandler={this.submitHandler}
                  handler={this.inputHandler}
                />
              )}
            />
            <Route exact path="/users/:id" component={User} />
            <Route
              exact
              path="/users"
              render={(props) => <List {...props} data={users} />}
            />
            <Route exact path="/not-found" render={() => <h2>Not found</h2>} />
            <Redirect to="/not-found" />
          </Switch>
        </Section>
      </Main>
    );
  }
}
