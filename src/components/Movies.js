import React, { Component } from "react";
import TableHeader from "./TableHeader";
import Movie from "./Movie";

export default class Movies extends Component {
  componentDidMount() {
    // console.log("moveis didmounted");
  }

  // componentDidUpdate(prevPros) {
  //   if (this.props.data.length !== prevPros.data.length) {
  //     console.log("movie listdan bitta movie deleted");
  //   }
  // }
  render() {
    const { deleteHandler, likeHandler, data: movies } = this.props;
    // console.log("movies render boldi");
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
