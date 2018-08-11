import expect from "expect";
import deepFreeze from "deep-freeze";

function addCounter(list, number) {
  // return list.push(number); #=> fail
  // return list.concat(number); #=> success
  return [...list, 0];
}
function testAddCounter() {
  let listBefore = [];
  let listAfter = [0];

  deepFreeze(listBefore);

  expect(addCounter(listBefore, 0)).toEqual(listAfter);
}

function removeCounter(list, index) {
  return [...list.slice(0, index), ...list.slice(index + 1)];
}
function testRemoveCounter() {
  let listBefore = [0, 1, 2, 3, 4, 5];
  let listAfter = [0, 1, 2, 3, 5];

  deepFreeze(listBefore);

  expect(removeCounter(listBefore, 4)).toEqual(listAfter);
}

function incrementCounter(list, index) {
  return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];
}

function testIncrementcounter() {
  let listBefore = [0, 1, 2, 3, 4, 5];
  let listAfter = [0, 1, 2, 3, 5, 5];

  deepFreeze(listBefore);

  expect(incrementCounter(listBefore, 4)).toEqual(listAfter);
}

testAddCounter();
testRemoveCounter();
testIncrementcounter();
console.log("[avoiding-array-mutation.js]: all test passed!");
