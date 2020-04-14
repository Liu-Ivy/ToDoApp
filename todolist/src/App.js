import React, { Component } from "react";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      lists: [],
    };
  }
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
