import React, { Component } from 'react';

import './TodoList.css';

export default class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <ul className="TodoItems">
          {this.props.todos.map((todo, i) => {
            return (
              <li className="TodoItem" key={todo.id}>
                <label>
                  <input type="checkbox"
                    className="TodoList__inputCheckbox"
                    checked={todo.finished}
                    onChange={_ => this.props.updateTodoStatus(todo)} />
                  {todo.text}
                </label>
                <span onClick={_ => this.props.deleteTodo(todo)}>[delete]</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}