import React, { Component } from "react";
import shortid from "shortid";

class TodoList extends Component {
  state = {
    todos: [],
    text: "",
  };

  addTodos = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
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
  render() {
    return (
      <div>
        <form>
          <input
            input
            type="text"
            value={this.state.text}
            placeholder="todo..."
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}> Add </button>
        </form>
        {JSON.stringify(this.state.todos)}
      </div>
    );
  }
}

export default TodoList;
