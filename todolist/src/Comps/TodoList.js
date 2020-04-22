import React, { Component } from "react";
import shortid from "shortid";

class TodoList extends Component {
  state = {
    todos: [],
    text: "",
  };

  addTodos = (todo) => {
    this.setState({ todos: [todo, ...this.state.todos] });
  };

  handleChange = (e) => {
    this.setState({ [e.target.type]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addTodos({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({ text: "" });
  };
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.text}
            placeholder="todo..."
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>add</button>
        </form>
        {this.state.todos.map((todo) => (
          <div
            key={todo.id}
            style={{ textDecoration: todo.complete ? "line-through" : "" }}
            onClick={() => this.toggleComplete(todo.id)}
          >
            {todo.text}
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
