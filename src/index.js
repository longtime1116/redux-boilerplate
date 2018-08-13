import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./components/VisibleTodoList";
import Footer from "./components/Footer";
import store from "./store";

export default function TodoApp() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
