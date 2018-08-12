import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import store from "./store";

let nextTodoId = 0;

const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
  }
};

export default function TodoApp({ todos, visibilityFilter }) {
  const visibleTodos = getVisibleTodos(todos, visibilityFilter);
  return (
    <div>
      <AddTodo
        onAddTodoClick={text => {
          store.dispatch({
            type: "ADD_TODO",
            id: nextTodoId++,
            text: text
          });
        }}
      />

      <TodoList
        todos={visibleTodos}
        onTodoClick={id => {
          store.dispatch({
            id: id,
            type: "TOGGLE_TODO"
          });
        }}
      />
      <Footer
        visibilityFilter={visibilityFilter}
        onVisibilityFilterClick={filter => {
          store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: filter
          });
        }}
      />
    </div>
  );
}
// subscribe
const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById("root")
  );
};

store.subscribe(render);

render();
