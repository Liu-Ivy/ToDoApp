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

  updatedShowTodo = (showTodo) => {
    this.setState({
      display: showTodo,
    });
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
            toggleComplete={() => {
              this.toggleComplete(todo.id);
            }}
          />
        ))}
        <div>
          More things todo :
          {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <button onClick={() => this.updatedShowTodo("all")}>All</button>
        <button onClick={() => this.updatedShowTodo("notDone")}>
          Not Done
        </button>
        <button onClick={() => this.updatedShowTodo("done")}>Done</button>
      </div>
    );
  }
}
export default TodoList;
