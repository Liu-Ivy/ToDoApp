import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "../App.css";

class TodoList extends Component {
  state = {
    todos: [],
    display: "all",
    allComplete: true,
  };
  addTodos = (todo) => {
    this.setState({ todos: [todo, ...this.state.todos] });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
    // }
  };

  updateTodos = (showTodos) => {
    this.setState({ display: showTodos });
  };

  handleDelete = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  }; //using state function instead of this.state.todos.........

  removeAllDones = () => {
    this.setState({ todos: this.state.todos.filter((todo) => !todo.complete) });
  };

  render() {
    let todos = [];

    if (this.state.display === "all") {
      todos = this.state.todos;
    } else if (this.state.display === "notDone") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.display === "done") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div className="content">
        <TodoForm onSubmit={this.addTodos} />
        {/* {JSON.stringify(this.state.todos)} */}
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={() => this.handleDelete(todo.id)}
            toggleComplete={() => {
              this.toggleComplete(todo.id);
            }}
          />
        ))}
        <div className="counter">
          More things todo :
          {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <button className="button" onClick={() => this.updateTodos("all")}>
          Show All
        </button>
        <button className="button" onClick={() => this.updateTodos("notDone")}>
          Show Todos
        </button>
        <button className="button" onClick={() => this.updateTodos("done")}>
          Show Done
        </button>
        {this.state.todos.some((todo) => todo.complete) ? ( //this.state.todos.filter((todo). => todo.complete) .length
          <div>
            <button className="done-btn" onClick={this.removeAllDones}>
              Remove all Done
            </button>
          </div>
        ) : (
          <div>
            <button
              className="done-btn"
              onClick={() =>
                this.setState((state) => ({
                  todos: state.todos.map((todo) => ({
                    ...todo,
                    complete: state.allComplete,
                  })),
                  allComplete: !state.allComplete,
                }))
              }
            >
              All Completed
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default TodoList;
