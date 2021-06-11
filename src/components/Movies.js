import React, { Component } from "react";

import likeImg from "../assets/imgs/like.png";
import dislikeImg from "../assets/imgs/dislike.png";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    const { data: movies, deleteHandler, likeHandler } = this.props;

    return (
      <div>
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
                <td onClick={() => likeHandler(item.id)}>
                  <img
                    src={item.isLike ? likeImg : dislikeImg}
                    alt="like-img"
                  />
                </td>
                <td>
                  <button onClick={() => deleteHandler(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
