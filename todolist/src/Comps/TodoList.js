import React, { Component } from "react";

class TodoList extends Component {
  state = {
    todos: [],
    text: "",
  };

  handleChange = (e) => {
    console.log(typeof e.target);
    this.setState({ [e.target.type]: e.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="...todo" onChange={this.handleChange} />
      </div>
    );
  }
}

export default TodoList;
