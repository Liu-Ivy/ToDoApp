import React from "react";

function Todo(props) {
  console.log(props);

  return (
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
  );
}

export default Todo;
