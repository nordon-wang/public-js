import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import * as serviceWorker from "./serviceWorker";
import logger from "redux-logger";
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from "redux";


// 1. 定义 reducer
function Reducer(state = {}, action) {
  const { type, payload = 1 } = action

  switch (type) {
    case 'INCREMENT':
      return {
        count: state.count + payload
      }
    case 'DECREMENT':
      return {
        count: state.count - payload
      }
    default:
      return state
  }
}

// 2. 创建 store
const store = createStore(Reducer, {
  count: 1
},
applyMiddleware(ReduxThunk, logger)
)

// 3. 获取 state
console.log(store.getState());

// 4. dispatch
// let timer = setTimeout(() => {
  
//   store.dispatch({
//     type: 'INCREMENT'
//   })
//   clearTimeout(timer)
// }, 2000);

// 5. 监听
store.subscribe(() => {
  render()
  console.log(store.getState());
})

const Counter = props => {

  const { count } = props
  return <div>
    <h1>{count}</h1>
    <button onClick={props.increment}>Increment</button>
    <button onClick={props.asyncIncrement}>asyncIncrement</button>
  </div>
}

function increment() {
  return {
    type: 'INCREMENT'
  }
}

function asyncIncrement() {
  return function (dispatch, getState) {
    let timer = setTimeout(() => {
      dispatch(increment())
      clearTimeout(timer)
    }, 2000);
  }
}

function render() {
  ReactDOM.render(
    <Counter 
      {...store.getState()} 
      increment={() => store.dispatch(increment())}
      asyncIncrement={() => store.dispatch(asyncIncrement())}
    />,
    document.getElementById("root")
  );
}

render();

serviceWorker.unregister();
