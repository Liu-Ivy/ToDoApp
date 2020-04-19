import React, { Component } from "react";
import TodoForm from "./TodoForm";
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
    console.log(this.state.todos);
  };
  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodos} />
        {/* {JSON.stringify(this.state.todos)} */}
        {this.state.todos.map((todo) => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </div>
    );
  }
}
export default TodoList;
