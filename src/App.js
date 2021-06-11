import React, { Component } from "react";
import fakeData from "./db/movie";
import likeImg from "./assets/imgs/like.png";
import dislikeImg from "./assets/imgs/dislike.png";

import "./style/app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      movies: fakeData,
    };
  }

  // likeHandler = (id) => {
  //   const { movies } = this.state;
  //   const movie = movies.find((item) => item.id === id);
  //   const index = movies.findIndex((item) => item === movie);
  //   movie.isLike = movie.isLike ? false : true;

  //   const updatedMovie = movies.slice(index);
  //   this.setState({ movie: updatedMovie });
  // };

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
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stoke</th>
                  <th>Rate</th>
                  <th>IsLike</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((item, index) => (
                  <tr key={item.id || index}>
                    <td>{item.title}</td>
                    <td>{item.genre}</td>
                    <td>{item.stock}</td>
                    <td>{item.rate}</td>
                    <td onClick={() => this.likeHandler(item.id)}>
                      <img
                        src={item.isLike ? likeImg : dislikeImg}
                        alt="like-img"
                      />
                    </td>
                    <td>
                      <button onClick={() => this.deleteHandler(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <h3>No Movies</h3>
        )}
      </React.Fragment>
    );
  }
}

export default App;
