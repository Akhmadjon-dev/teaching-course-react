import React, { Component } from "react";
import TableHeader from "../../components/TableHeader";
import Movie from "./Movie";
import Update from "./UpdateMovie";
import Add from "./AddMovie";
import Switch from "../../components/Switch";

export default class Movies extends Component {
  state = {
    isUpdate: false,
  };
  componentDidMount() {}

  render() {
    const { isUpdate } = this.state;
    const {
      deleteHandler,
      likeHandler,
      data: movies,
      addMovie,
      inputHandler,
      movie,
    } = this.props;

    return (
      <div className="movies">
        <div className="movies__header d__flex jc__space-between">
          <h2>Handle switch</h2>
          <Switch
            switchHandler={() => this.setState({ isUpdate: !isUpdate })}
            isUpdate={isUpdate}
          />
        </div>
        {isUpdate && (
          <Add addMovie={addMovie} data={movie} inputHandler={inputHandler} />
        )}
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
