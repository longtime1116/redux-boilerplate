import { createStore } from "redux";
import todoApp from "./reducers/todoApp";

export default createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
