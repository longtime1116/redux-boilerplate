import expect from "expect";
import deepFreeze from "deep-freeze";

function addTodo(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
}

function testAddTodo() {
  const stateBefore = [];
  let action = {
    id: 0,
    type: "ADD_TODO",
    text: "redux tutorial"
  };
  let stateAfter = [
    {
      id: 0,
      text: "redux tutorial",
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(addTodo(stateBefore, action)).toEqual(stateAfter);
}

testAddTodo();
console.log("[writing-a-todo-list-reducer.js]: all test passed!");
