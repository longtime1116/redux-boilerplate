export default function combineReducers(reducers) {
  return function combineReducer(state = {}, action) {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
}
// const todoApp = combineReducers({todos, visibilityFilter});
// const store = createStore(todoApp)
// store.dispatch(action)
// ↑これは内部的には、todoApp(state, action) となる
// なので、coombineReducers は store と action を引数に取る関数を返す
