import React, { Component } from "react";
import Input from "../../components/Form/Input";

export default class AddMovie extends Component {
  render() {
    const {
      addMovie,
      inputHandler,
      data: { title, genre, stock, isLike, rate },
    } = this.props;
    return (
      <form onSubmit={addMovie} className="form">
        <Input
          value={title}
          handler={inputHandler}
          name="title"
          title="Title"
        />

        <div className="form__element">
          <label className="form__label" htmlFor="title">
            Genre
          </label>
          <select onChange={inputHandler} name="genre">
            <option value="action">Action</option>
            <option value="thriller">Thriller</option>
            <option value="comedy">Comedy</option>
          </select>
        </div>

        <Input
          value={stock}
          handler={inputHandler}
          name="stock"
          title="Stoke"
          type="number"
        />
        <Input
          value={rate}
          handler={inputHandler}
          name="rate"
          title="Rate"
          type="number"
        />

        <div className="form__element">
          <label className="form__label" htmlFor="title">
            Like
          </label>
          <div>
            <label htmlFor="">True</label>
            <input
              className="form__input"
              onChange={inputHandler}
              name="isLike"
              value="true"
              type="radio"
            />
          </div>
          <div>
            <label htmlFor="">False</label>
            <input
              className="form__input"
              onChange={inputHandler}
              value="false"
              name="isLike"
              type="radio"
            />
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}
