import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
/*
  TodoMVC
  1. add todo
    1.input
    2.submit
  2. display todos
    1.map()
  3. cross off todo
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if atleast one is complete
  8. button to toggle all on/off
*/

class TodoList extends Component {
  state = {
    todos: [],
    display: "all",
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
  };

  updateTodos = (showTodos) => {
    this.setState({ display: showTodos });
  };

  handleDelete = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };

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
      <div>
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
        <div>
          More things todo :
          {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <button onClick={() => this.updateTodos("all")}>All</button>
        <button onClick={() => this.updateTodos("notDone")}>Not Done</button>
        <button onClick={() => this.updateTodos("done")}>Done</button>
        {this.state.todos.some((todo) => todo.complete) ? (
          <div>
            <button onClick={this.removeAllDones}>Remove all Done</button>
          </div>
        ) : null}
      </div>
    );
  }
}
export default TodoList;
