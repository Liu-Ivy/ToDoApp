import React, { Component } from "react";
import shortid from "shortid";
import "../App.css";

class TodoForm extends Component {
  state = {
    text: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({ text: "" }); //to empty the inputfild
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="text"
            value={this.state.text}
            placeholder="todo..."
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}> Add </button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
