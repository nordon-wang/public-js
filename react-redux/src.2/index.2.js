import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import * as serviceWorker from "./serviceWorker";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";

import RootReducer from "./reducers";
// console.log(RootReducer);

// 1. 定义 reducer
// function Reducer(state = 0, action) {
//   const { type } = action
//   if (type === 'INCREMENT') {
//     return state + 1
//   }else if(type === 'DECREMENT'){
//     return state - 1
//   }else {
//     return state
//   }
// }

const Reducer = (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CHAT":
      return Object.assign({}, state, {
        chatLog: state.chatLog.concat(payload)
      });
    case "CHANGE_STATUS":
      return Object.assign({}, state, {
        statusMessage: payload
      });
    case "CHANGE_USERNAME":
      return Object.assign({}, state, {
        userName: payload
      });
    default:
      return state;
  }
};

// 2. 基于 reducer 创建 Store
const store = createStore(
  RootReducer,
  {
    chatLog: [],
    statusMessage: "初始化 statusMessage",
    userName: "初始化 userName"
  },
  applyMiddleware(logger)
);

// const dispatch = store.dispatch
// store.dispatch = function (action) {
//   console.log('previous --- ');
//   dispatch(action)
//   console.log('next ---');
// }

// 3. 获取 store 状态
// const state = store.getState()

// 4. 更新 store 状态
// let timer = setTimeout(() => {
//   store.dispatch({
//     type: 'INCREMENT'
//   })
//   clearTimeout(timer)
// }, 2000);

setTimeout(() => {
  store.dispatch({
    type: "ADD_CHAT",
    payload: [1, 2, 3]
  });
}, 2000);

setTimeout(() => {
  store.dispatch({
    type: "CHANGE_STATUS",
    payload: "修改之后的msg"
  });
}, 3000);

setTimeout(() => {
  store.dispatch({
    type: "CHANGE_USERNAME",
    payload: "修改用户名"
  });
}, 4000);

// 5. 监测 store 中 state 变化 ， 驱动视图更新
store.subscribe(() => {
  render();
});

const Counter = props => {
  const { chatLog, statusMessage, userName } = props;
  return (
    <div>
      <h1>{props.count}</h1>
      <ul>
        {chatLog.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <h2>{statusMessage}</h2>
      <h2>{userName}</h2>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

function render() {
  ReactDOM.render(
    <Counter {...store.getState()} count={100} />,
    document.getElementById("root")
  );
}

render();

serviceWorker.unregister();
