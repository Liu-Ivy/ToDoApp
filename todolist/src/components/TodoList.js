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
  };
  addTodos = (todo) => {
    this.setState({ todos: [todo, ...this.state.todos] });
  };

  toggleComplete = (id) => {
    this.setState((theTodo) => ({
      todos: theTodo.todos.map((todo) => {
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
    }));
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodos} />
        {/* {JSON.stringify(this.state.todos)} */}
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            toggleComplete={() => {
              this.toggleComplete(todo.id);
            }}
          />
        ))}
      </div>
    );
  }
}
export default TodoList;
