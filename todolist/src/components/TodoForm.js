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
    if (this.state.text !== "") {
      this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        complete: false,
      });
      this.setState({ text: "" }); //to empty the inputfild
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            name="text"
            value={this.state.text}
            placeholder="todo..."
            onChange={this.handleChange}
          />
          <button
            className="input_btn far fa-plus-square"
            style={{ border: "none" }}
            onClick={this.handleSubmit}
          ></button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
