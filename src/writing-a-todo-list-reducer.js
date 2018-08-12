import expect from "expect";
import deepFreeze from "deep-freeze";

function todo(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

function testAddTodo() {
  let action = {
    id: 0,
    type: "ADD_TODO",
    text: "redux tutorial"
  };
  const stateBefore = [];
  let stateAfter = [
    {
      id: 0,
      text: "redux tutorial",
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
}

function testToggleTodo() {
  let action = {
    id: 0,
    type: "TOGGLE_TODO"
  };
  const stateBefore = [
    {
      id: 0,
      text: "react tutorial",
      completed: false
    },
    {
      id: 1,
      text: "redux tutorial",
      completed: false
    }
  ];
  const stateAfter = [
    {
      id: 0,
      text: "react tutorial",
      completed: true
    },
    {
      id: 1,
      text: "redux tutorial",
      completed: false
    }
  ];

  expect(todos(stateBefore, action)).toEqual(stateAfter);
}

testAddTodo();
testToggleTodo();
console.log("[writing-a-todo-list-reducer.js]: all test passed!");
