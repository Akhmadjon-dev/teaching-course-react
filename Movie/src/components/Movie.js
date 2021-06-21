import React, { Component } from "react";

import likeImg from "../assets/img/like.png";
import dislikeImg from "../assets/img/dislike.png";

export default class Movie extends Component {
  render() {
    const { item, id: index, likeHandler, deleteHandler } = this.props;
    // console.log("movie rendered");
    return (
      <tr>
        <td>{item.title}</td>
        <td>{item.genre}</td>
        <td>{item.stock}</td>
        <td>{item.rate}</td>
        <td onClick={() => likeHandler(item.id)}>
          <img src={item.isLike ? likeImg : dislikeImg} alt="like-img" />
        </td>
        <td>
          <button onClick={() => deleteHandler(item.id)}>Delete</button>
        </td>
      </tr>
    );
  }
}
