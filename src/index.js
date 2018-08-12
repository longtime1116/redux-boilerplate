import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import todoApp from "./reducers/todoApp";

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let nextTodoId = 0;

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
    return (
      <div>
        <input
          ref={node => {
            this.input = node;
          }}
        />
        <button
          onClick={() => {
            store.dispatch({
              type: "ADD_TODO",
              id: nextTodoId++,
              text: this.input.value
            });
            this.input.value = "";
          }}
        >
          Add Todo
        </button>
        <ul>
          {todos.map(todo => {
            return (
              <li
                key={todo.id}
                onClick={() => {
                  store.dispatch({
                    id: todo.id,
                    type: "TOGGLE_TODO"
                  });
                }}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
              >
                {todo.text}
              </li>
            );
          })}
        </ul>
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
