import React from "react";

function Todo(props) {
  console.log(props);

  return (
    <div>
      <div
        style={{
          textDecoration: props.todo.complete ? "line-through" : "",
        }}
        onClick={props.toggleComplete}
      >
        {props.todo.text}
      </div>
      <button onClick={props.onDelete}>-</button>
    </div>
  );
}

export default Todo;
