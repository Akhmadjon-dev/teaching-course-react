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

  render() {
    const { movies, users } = this.state;

    return (
      <React.Fragment>
        {movies.length ? (
          <>
            <Navbar movies={movies} users={users} />
            <Movies
              data={movies}
              deleteHandler={this.deleteHandler}
              likeHandler={this.likeHandler}
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
