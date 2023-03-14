import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import Todos from "../src/models/todo";
function App() {
  const todo = [new Todos("Learn React"), new Todos("Learn Py")];
  return (
    <>
      <Todo items={todo} />
    </>
  );
}

export default App;
