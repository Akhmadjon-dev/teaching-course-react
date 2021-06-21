import React, { Component } from "react";
import fakeData from "./db/movie";
import Movies from "./container/Movies";
import Input from "./components/Form/Input";
import Navbar from "./components/Navbar";
import "./style/app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      movies: fakeData,
      users: [],
      movie: {
        title: "",
        rate: "",
        stock: "",
        isLike: false,
        genre: "",
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

  inputHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState((prev) => ({
      movie: {
        ...prev.movie,
        [name]: name === "isLike" ? value : value,
      },
    }));
  };

  addNewMovie = (e) => {
    e.preventDefault();

    this.setState((prev) => ({
      movies: [{ ...prev.movie, id: prev.movies.length + 1 }, ...prev.movies],
    }));
    console.log(e);
  };

  counterHandler = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { name, age, phone } = this.state;
    const newUser = { name, age, phone };
    console.log(newUser);
  };

  render() {
    console.log(this.state);
    const { movies, users, movie } = this.state;

    return (
      <React.Fragment>
        {movies.length ? (
          <>
            <Navbar movies={movies} users={users} />
            <Movies
              addMovie={this.addNewMovie}
              data={movies}
              deleteHandler={this.deleteHandler}
              likeHandler={this.likeHandler}
              inputHandler={this.inputHandler}
              movie={movie}
            />
          </>
        ) : (
          <h3>No Movies</h3>
        )}
      </React.Fragment>
    );
  }
}

export default App;
