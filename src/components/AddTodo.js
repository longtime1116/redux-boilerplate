import React from "react";

export default function AddTodo({ onAddTodoClick }) {
  let input;
  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          onAddTodoClick(input.value);
          input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
