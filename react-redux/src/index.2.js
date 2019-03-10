import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

/**
 * 1. 定义 reducer
 * @param {*} state 容器的初始状态
 * @param {*} action  修改 state 的行为类型
 *  type 行为类型
 *  payload(可选) 其他数据
 */

function Reducer(state = 0, action){
  const {type, value} = action
  if(type === 'INCREMENT'){
    return state + value
  }else if(type === 'DECREMENT'){
    return state - 1
  }else{
    return state
  }
}

// 2. 基于 reducer 创建 Store
const store = createStore(
  Reducer,
  applyMiddleware(ReduxThunk, logger)
) 

// 5. 检测 store 中 state 的变化, 驱动试图更新
store.subscribe(() => {
  render()
})


const Counter = (props) => {
  return (
    <div>
      <h1>{props.value}</h1>
      <button onClick={props.incrememt}>Increment</button>
      <button onClick={props.asyncIncrement}>AsyncIncrement</button>
    </div>
  )
}

function increment(value){
  return {
    type:"INCREMENT",
    value
  }
}

function asyncIncrement(){
  return function (dispatch, getState) {
    setTimeout(() => {
      dispatch(increment(3))
    }, 1000)

  }
}

function render(){
  ReactDOM.render(
    <Counter 
      incrememt={() => store.dispatch(increment(2))}
      asyncIncrement={() => store.dispatch(asyncIncrement())}
      value={store.getState()} />, 
    document.getElementById('root')
  );
}

render()

registerServiceWorker();
