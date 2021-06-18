import React, { Component } from "react";
import fakeData from "./db/movie";
import Movies from "./container/Movies";
import Navbar from "./components/Navbar";
import "./style/app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      movies: fakeData,
      users: [],
      name: "",
      age: "",
      phone: "",
      user: {
        name: "",
        age: "",
        phone: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    this.setState({ users, movies: fakeData });
  }

  likeHandler = (id) => {
    const movies = this.state.movies.map((item) =>
      item.id === id ? { ...item, isLike: !item.isLike } : item
    );
    this.setState({ movies });
  };

  deleteHandler = (id) => {
    const movies = this.state.movies.filter((item) => item.id !== id);
    this.setState({
      movies,
    });
  };

  addNewMovie = (e) => {
    e.preventDefault();
    console.log(e);
  };

  inputHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { name, age, phone } = this.state;
    const newUser = { name, age, phone };
    console.log(newUser);
  };

  render() {
    console.log(this.state);
    const { movies, users, name, age, phone } = this.state;

    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            value={name}
            onChange={this.inputHandler}
            name="name"
          />
          <input
            type="age"
            value={age}
            onChange={this.inputHandler}
            name="age"
          />
          <input
            type="phone"
            value={phone}
            onChange={this.inputHandler}
            name="phone"
          />
          <button>Send</button>
        </form>
        {/* {movies.length ? (
          <>
            <Navbar movies={movies} users={users} />
            <Movies
              addMovie={this.addNewMovie}
              data={movies}
              deleteHandler={this.deleteHandler}
              likeHandler={this.likeHandler}
            />
          </>
        ) : (
          <h3>No Movies</h3>
        )} */}
      </React.Fragment>
    );
  }
}

export default App;
