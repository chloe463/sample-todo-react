import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Todo {
  constructor(text) {
    this.id       = text + (new Date()).getTime();
    this.text     = text;
    this.finished = false;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      todos: [
        new Todo('Todo1'),
        new Todo('Todo2'),
        new Todo('Todo3'),
      ]
    };

    this.handleInput      = this.handleInput.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
    this.updateTodoStatus = this.updateTodoStatus.bind(this);
    this.deleteTodo       = this.deleteTodo.bind(this);
  }

  handleInput(event) {
    this.setState(Object.assign({}, this.state, {
      inputText: event.target.value
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.inputText === '') {
      return;
    }
    const todos =  this.state.todos.slice().concat(
      new Todo(this.state.inputText)
    );
    this.setState(Object.assign({}, this.state, {
      inputText: '',
      todos
    }));
  }

  updateTodoStatus(todoToUpdate) {
    const todos =  this.state.todos.slice().map(todo => {
      if (todo === todoToUpdate) {
        todo.finished = !todo.finished;
      }
      return todo;
    });
    this.setState(Object.assign({}, this.state, {
      todos
    }));
  }

  deleteTodo(todoToDelete) {
    const todos = this.state.todos.slice().filter(todo => {
      return todo !== todoToDelete;
    });
    this.setState(Object.assign({}, this.state, {
      todos
    }));
  }

  render() {
    return (
      <div className="App">
        <form className="TodoInput" onSubmit={this.handleSubmit}>
          <input type="text"
            placeholder="TODO"
            className="TodoInput__inputText"
            value={this.state.inputText}
            onInput={this.handleInput}/>
          <button type="submit" className="TodoInput__submitButton">Submit</button>
        </form>

        <div className="TodoList">
          <ul className="TodoItems">
            {this.state.todos.map((todo, i) => {
              return (
                <li className="TodoItem" key={todo.id}>
                  <label>
                    <input type="checkbox"
                      className="TodoList__inputCheckbox"
                      checked={todo.finished}
                      onChange={_ => this.updateTodoStatus(todo)} />
                    {todo.text}
                  </label>
                  <span onClick={_ => this.deleteTodo(todo)}>[delete]</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
