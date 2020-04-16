import React, { Component } from "react";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
