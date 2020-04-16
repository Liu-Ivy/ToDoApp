import React, { Component } from "react";
import List from "./List";

class App extends Component {
  state = {
    input: "",
    lists: [],
  };

  onChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      input: "",
      lists: [...this.state.lists, this.state.input],
    });
  };

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.input} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List lists={this.state.lists} />
      </div>
    );
  }
}

export default App;
