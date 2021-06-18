import React, { Component } from "react";

export default class UpdateMovie extends Component {
  render() {
    return (
      <form className="form">
        <div className="form__element">
          <label className="form__label" htmlFor="title">
            Title
          </label>
          <input className="form__input" name="title" type="text" />
        </div>

        <div className="form__element">
          <label className="form__label" htmlFor="title">
            Genre
          </label>
          <select name="genre">
            <option value="action">Action</option>
            <option value="thriller">Thriller</option>
            <option value="comedy">Comedy</option>
          </select>
        </div>

        <div className="form__element">
          <label className="form__label" htmlFor="title">
            Stoke
          </label>
          <input className="form__input" name="stock" type="number" />
        </div>
        <div className="form__element">
          <label className="form__label" htmlFor="title">
            Rate
          </label>
          <input className="form__input" type="number" name="rate" />
        </div>
        <div className="form__element">
          <label className="form__label" htmlFor="title">
            Like
          </label>
          <div>
            <label htmlFor="">True</label>
            <input className="form__input" name="isLike" type="radio" />
          </div>
          <div>
            <label htmlFor="">False</label>
            <input className="form__input" name="isLike" type="radio" />
          </div>
        </div>
        <button type="submit">Update</button>
      </form>
    );
  }
}
