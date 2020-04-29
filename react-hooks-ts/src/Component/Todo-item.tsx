import React from "react";
import { TodoItemInterface } from "../interfaces";

const TodoItem = (props: TodoItemInterface) => {
  return (
    <div>
      <input type="text" placeholder="todo..." />
      <button> + </button>
    </div>
  );
};

export default TodoItem;
