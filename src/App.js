import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';

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
        <TodoInput
          value={this.state.inputText}
          onChange={this.handleInput}
          onSubmit={this.handleSubmit}
        />

        <TodoList
          todos={this.state.todos}
          updateTodoStatus={this.updateTodoStatus}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
