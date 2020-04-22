import React, { Component } from "react";
import shortid from "shortid";

// TodoMVC
//   1. add todo
//     1.input
//     2.submit
//   2. display todos
//     1.map()
//   3. cross off todo

class TodoList extends Component {
  state = {
    todos: [],
    text: "",
  };

  addTodos = (todo) => {
    this.setState({ todos: [todo, ...this.state.todos] });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addTodos({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({ text: "" }); //to empty the inputfild
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
            name="text"
            value={this.state.text}
            placeholder="todo..."
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}> Add </button>
          {this.state.todos.map((todo) => (
            <div
              key={todo.id}
              text={todo.text}
              style={{
                textDecoration: todo.complete ? "line-through" : "",
              }}
              onClick={() => {
                this.toggleComplete(todo.id);
              }}
            >
              {todo.text}
            </div>
          ))}
        </form>
      </div>
    );
  }
}

export default TodoList;
