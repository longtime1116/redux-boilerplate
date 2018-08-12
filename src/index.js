import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import todoApp from "./reducers/todoApp";

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let nextTodoId = 0;

export default class TodoApp extends Component {
  render() {
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
          {this.props.todos.map(todo => {
            return <li key={todo.id}>{todo.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}
// subscribe
const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos} />,
    document.getElementById("root")
  );
};

store.subscribe(render);

render();
