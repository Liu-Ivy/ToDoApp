import React from "react";

const List = (props) => (
  <ul>
    {props.lists.map((list, index) => (
      <li key={index}>{list}</li>
    ))}
  </ul>
);

export default List;
