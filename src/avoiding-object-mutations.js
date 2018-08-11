import expect from "expect";
import deepFreeze from "deep-freeze";

function toggleTodo(todo) {
  return { ...todo, completed: true };
}

function testToggleTodo() {
  let todoBefore = {
    id: 0,
    text: "redux tutorial",
    completed: false
  };
  let todoAfter = {
    id: 0,
    text: "redux tutorial",
    completed: true
  };

  deepFreeze(todoBefore);

  expect(toggleTodo(todoBefore)).toEqual(todoAfter);
}

testToggleTodo();
console.log("[avoiding-object-mutation.js]: all test passed!");
