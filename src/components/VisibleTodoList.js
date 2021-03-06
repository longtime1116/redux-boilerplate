import React from "react";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import toggleTodo from "../actions/toggleTodo";

const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
};

function mapStateToProps({ todos, visibilityFilter }) {
  return { todos: getVisibleTodos(todos, visibilityFilter) };
}

function mapStateToDispatch(dispatch) {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(TodoList);
