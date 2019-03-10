import React from 'react'

// UI 组件-- UI组件又称为 纯组件 和纯函数一样 存粹由参数决定它的展示
// 只负责页面的展示, 不带有任何业务逻辑
// 没有状态 不使用 this.state 
// 所有数据都由参数 props 提供
// 不使用任何 redux 的API
const Counter = (props) => {
  const { foo, value, increment, decrement } = props
  return (
    <div>
      <h1>{foo}</h1>
      <h1>{value}</h1>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >decrement</button>
    </div>
  )
}

export default Counter