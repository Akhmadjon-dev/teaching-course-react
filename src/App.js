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

  // event Handlers

  incrementCounter = (text) => {
    console.log(text);
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  decrementCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  };

  deleteHandler = (id) => {
    const movies = this.state.movies.filter((item) => item.id !== id);
    this.setState({
      movies,
    });
  };

  render() {
    const { movies } = this.state;
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
                    <td>
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
