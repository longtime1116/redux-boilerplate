import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import todoApp from "./reducers/todoApp";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
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

const FilterLink = ({ children, filter, currentFilter }) => {
  if (currentFilter === filter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={event => {
        event.preventDefault();
        store.dispatch({
          type: "SET_VISIBILITY_FILTER",
          filter: filter
        });
      }}
    >
      {children}
    </a>
  );
};

export default class TodoApp extends Component {
  render() {
    const { todos, visibilityFilter } = this.props;
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
        <p>
          Show:{" "}
          <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter}>
            ALL
          </FilterLink>{" "}
          <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter}>
            ACTIVE
          </FilterLink>{" "}
          <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter}>
            COMPLETED
          </FilterLink>
        </p>
      </div>
    );
  }
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
