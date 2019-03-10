import React from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter'

// 容器组件
// 负责管理数据和业务逻辑 不负责UI的呈现
// 带有内部状态  -- this.state
// 使用 redux 的api

// 映射数据到 UI 组件
const mapStateToProps = state => {
  return {
    foo: 'bar',
    value: state
  }
}

// 映射行为到 UI 组件
const mapDispatchToProps = dispatch => {
  return {
    handleClick () {
      console.log('handleClick')
    },
    increment() {
      dispatch({
        type:'INCREMENT'
      })
    },
    decrement() {
      dispatch({
        type:'DECREMENT'
      })
    }
  }
}

//  得到一个容器组件
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer
