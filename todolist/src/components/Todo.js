import React from "react";

function Todo(props) {
  console.log(props);

  return (
    <div className="todos">
      <div
        style={{
          textDecoration: props.todo.complete ? "line-through" : "",
        }}
        onClick={props.toggleComplete}
      >
        {props.todo.text}
      </div>
      <button
        className="iconbtn far fa-trash-alt"
        onClick={props.onDelete}
      ></button>
    </div>
  );
}

export default Todo;
{
  /* style={{ border: "none" }} */
}
