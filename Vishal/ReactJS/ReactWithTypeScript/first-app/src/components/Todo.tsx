import React from "react";
import Todos from "../models/todo";
const Todo: React.FC<{ items: Todos[] }> = (props) => {
  return (
    <>
      <ul>
        {/* <li>Learn React</li>
        <li>Learn TypeScript</li> */}
        {props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
