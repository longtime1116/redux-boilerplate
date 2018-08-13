import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import VisibleTodoList from "./components/VisibleTodoList";
import store from "./store";

let nextTodoId = 0;

export default function TodoApp({ todos, visibilityFilter }) {
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

      <VisibleTodoList />

      <Footer />
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
