import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import todoApp from "./reducers/todoApp";

const store = createStore(todoApp);
// subscribe
const render = () => {
  ReactDOM.render(<div />, document.getElementById("root"));
};

store.subscribe(render);

render();
