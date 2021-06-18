import React, { Component } from "react";
import TableHeader from "../components/TableHeader";
import Movie from "../components/Movie";
import Update from "../components/UpdateMovie";

export default class Movies extends Component {
  state = {
    isUpdate: false,
  };
  componentDidMount() {}

  render() {
    const { isUpdate } = this.state;
    const { deleteHandler, likeHandler, data: movies } = this.props;

    return (
      <div>
        {isUpdate && <Update />}
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
