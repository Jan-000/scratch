import React from "react";
import Todo from "./pages/Todo";
import { Link } from "react-router-dom";

export default function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={todo.id} todo={todo}>
              <Todo key={todo.id} todo={todo} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
