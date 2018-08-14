import { connect } from "react-redux";
import React from "react";

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
          dispatch({
            type: "ADD_TODO",
            id: nextTodoId++,
            text: input.value
          });
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
