import expect from "expect";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
expect(counter(1, { type: "INCREMENT" })).toEqual(2);
expect(counter(2, { type: "DECREMENT" })).toEqual(1);
expect(counter(1, { type: "UNKNOWN" })).toEqual(1);
expect(counter(undefined, { type: "UNKNOWN" })).toEqual(0);
console.log("all test passed!");

// create store
const store = createStore(counter);
console.log(store.getState());
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());

function Counter({ value }) {
  return <h1>{value}</h1>;
}

// subscribe
const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()} />,
    document.getElementById("root")
  );
};
const onClick = () => {
  store.dispatch({ type: "INCREMENT" });
};
store.subscribe(render);
document.addEventListener("click", onClick);
render();
