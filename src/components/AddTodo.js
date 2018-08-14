import { connect } from "react-redux";
import React from "react";
import addTodo from "../actions/addTodo";

let nextTodoId = 0;

function AddTodo({ dispatch }) {
  let input;
  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default connect()(AddTodo);
// mapDispatchToProps を指定していないと dispatch をそのまま return する、
// つまり disptatch がそのまま props として渡るので、AddTodo はそれを受け取ることができる
//AddTodo = connect(
//  state => {
//    return {};
//  },
//  dispatch => {
//    return { dispatch };
//  }
//)(AddTodo);
