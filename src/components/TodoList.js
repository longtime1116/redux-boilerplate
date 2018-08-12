import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, onTodoClick }) {
  const todoList = todos.map(todo => {
    return (
      <Todo
        key={todo.id}
        text={todo.text}
        completed={todo.completed}
        onClick={() => onTodoClick(todo.id)}
      />
    );
  });
  return <ul>{todoList}</ul>;
}
