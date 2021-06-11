import React, { Component } from "react";
import fakeData from "./db/movie";
import likeImg from "./assets/imgs/like.png";
import dislikeImg from "./assets/imgs/dislike.png";
import Movies from "./components/Movies";
import "./style/app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      movies: fakeData,
    };
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
    const { movies } = this.state;
    console.log(movies);
    return (
      <React.Fragment>
        {movies.length ? (
          <>
            <h3>Movies list {movies.length} </h3>
            <Movies />
          </>
        ) : (
          <h3>No Movies</h3>
        )}
      </React.Fragment>
    );
  }
}

export default App;
