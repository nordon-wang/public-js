import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

/**
 * 1. 定义 reducer
 * @param {*} state 容器的初始状态
 * @param {*} action  修改 state 的行为类型
 *  type 行为类型
 *  payload(可选) 其他数据
 */

// function Reducer(state= 0, action){
//   const {type} = action
//   if(type === 'INCREMENT'){
//     return state + 1
//   }else if(type === 'DECREMENT'){
//     return state - 1
//   }else{
//     return state
//   }
// }

import rootReducer from './reducers'

// 2. 基于 reducer 创建 Store
// const store = createStore(Reducer, 111) //  111 是初始化 state, 可选
const store = createStore(
  rootReducer,
  applyMiddleware(logger)
) //  111 是初始化 state, 可选

// 改造 redux 的 dispatch方法, 每次调用的时候 打印 action state
// const dispatch = store.dispatch

// store.dispatch = function(action) {
//   console.log('action', action)
//   dispatch(action)
//   console.log('state', store.getState() )
// }


// 3. 获取 store 的状态
// const _state = store.getState() // 获取最新的状态
// console.log(store.getState())

// 4. 更新 store 的状态  store.dispatch({type: 行为类型, ...其他参数})
// setTimeout(() => {
//   // 发起 dispatch 就是调用 reducer
//   // dispatch 接收的参数叫做 action
//   store.dispatch({
//     type:'INCREMENT',
//   })
// }, 1000)

// setTimeout(() => {
//   store.dispatch({
//     type:'CHAT',
//     payload:"1111"
//   })
// }, 1000)

// setTimeout(() => {
//   store.dispatch({
//     type:'AGE',
//     payload:"ages"
//   })
// }, 1000)

// setTimeout(() => {
//   store.dispatch({
//     type:'USERNAME',
//     payload:"2222"
//   })
// }, 1000)

setTimeout(() => {
  store.dispatch({
    type:'MSG',
    payload:"3333"
  })
}, 1000)

// 5. 检测 store 中 state 的变化, 驱动试图更新
store.subscribe(() => {
  render()
})


const Counter = (props) => {
  return (
    <div>
      <h1>{props.msg}</h1>
      <h1>{props.username}</h1>
      <button>Increment</button>
      <button>Dncrement</button>
    </div>
  )
}

function render(){
  ReactDOM.render(<Counter {...store.getState()} />, document.getElementById('root'));
}

render()

registerServiceWorker();
