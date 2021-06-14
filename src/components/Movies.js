import React, { Component } from "react";
import TableHeader from "./TableHeader";
import Movie from "./Movie";

export default class Movies extends Component {
  render() {
    // const { movies } = this.state;
    const { deleteHandler, likeHandler, data: movies } = this.props;

    return (
      <div>
        <table>
          <TableHeader>
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
          </TableHeader>
          <tbody>
            {movies.map((item, index) => (
              <Movie
                deleteHandler={deleteHandler}
                likeHandler={likeHandler}
                item={item}
                id={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
