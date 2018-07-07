import React, { Component } from 'react';

import './TodoInput.css';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.handleInput  = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.props.onChange(event);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="TodoInput" onSubmit={this.props.onSubmit}>
        <input type="text"
          placeholder="TODO"
          className="TodoInput__inputText"
          value={this.props.value}
          onInput={this.props.onChange}
        />
        <button type="submit" className="TodoInput__submitButton">Submit</button>
      </form>
    );
  }
}
