/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useContext } from "react";
import TodosProvider, { TodosContext } from "./TodosProvider";

function Todos() {
  const { todos, addTodo } = useContext(TodosContext);

  return (
    <div>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>{todo}</div>
        ))}
      </div>
      <button onClick={() => addTodo("new todo")}>add todo</button>
    </div>
  );
}

export default function TodoApp() {
  return (
    <TodosProvider>
      <Todos />
    </TodosProvider>
  );
}
