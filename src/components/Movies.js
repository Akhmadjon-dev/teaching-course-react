import React, { Component } from "react";

export default class Movies extends Component {
  render() {
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
            {/* {movies.map((item, index) => (
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
            ))} */}
          </tbody>
        </table>
      </div>
    );
  }
}
