import React, { Component } from "react";
import TableHeader from "../components/TableHeader";
import Movie from "../components/Movie";

export default class Movies extends Component {
  componentDidMount() {}

  render() {
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
                key={item.id || index}
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
