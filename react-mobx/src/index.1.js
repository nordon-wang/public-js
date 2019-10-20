import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import { observable, action, autorun, computed, configure, runInAction } from 'mobx'
import { observer } from 'mobx-react'


configure({
  // 修改 mobx 中的数据, 必须使用 @action 装饰的函数, 不能直接通过实例进行修改
  enforceActions: 'observed'
})

// 1. 初始化 mobx 容器仓库
class Store {
  // @observable 把普通数据转换为可被观测的数据
  @observable price = 10
  @observable count = 2
  // 计算属性
  @computed get totalPrice(){
    return this.price * this.count
  }

  noObservale = 'foo'

  @action.bound increment (){
    this.count++
  }

  // 如果不使用 bound 绑定, 可能会导致内部的this 指向出现问题
  @action.bound change(){
    this.count = 22
    this.price = 33
  }

}

const store = new Store()

autorun(() => {
  // 被 observable 检测, 每一次改变会被 autorun 监测
  console.log('autorun', store.count, store.price) // aount 被检测 每一次改变都能获取到
  // console.log('autorun', store.noObservale) // noObservale 没被检测 初始化之后的改变 不会被监测到
})

runInAction(() => {
  store.count = 111
  store.price = 222
})

//  每次改变都会执行 autorun
// store.count = 11
// store.noObservale = 'hello'
// store.price = 11

// store.change() // 调用方法 只会执行一次 autorun
// const change = store.change
// change()

// 2. 在组件中使用 mobx 容器状态
@observer
class App extends React.Component{
  render() {
    const { store } = this.props
    return (
      <div>
        <h1>mobx</h1> 
        <h1>{store.count}</h1> 
        <h1>total: {store.count * store.price}</h1> 
        <h1>total: {store.totalPrice}</h1> 
        <div>
          <button onClick={store.increment}>increment</button>
        </div>
      </div>
    )
  }
}

// 3. 在组件中发起 action 修改容器状态

ReactDOM.render(<App store={new Store()} />, document.getElementById('root'));

serviceWorker.unregister();


// 装饰器 是一个对类进行处理的函数
@fn
@fn2(12)
@fn3
class MyClass {
  @readonly msg = 'sad'
}

function fn(target){
  target.fo = 'bar'
}

function fn2(value) {
  return function(target){
    target.acount = value
  }
}

function fn3(target){
  target.prototype.pro = 'pro'
}

// target 是目标类的原型对象 .prototype
// name 被修饰的类成员 名称
// descriptor 被修饰的类成员的描述对象
function readonly(target, name, descriptor){
  descriptor.writable = false // 不能重写
}

// console.log(MyClass.acount)
// console.log(MyClass.fo)
// console.log(new MyClass().pro)


function mixins(...list){
  return function(target){
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  say(){
    console.log('say....')
  },
  eat(){
    console.log('eat...')
  }
}

@mixins(Foo)
class MixinsClass{
}

const mixinObj = new MixinsClass()
// mixinObj.say()
// mixinObj.eat()
// console.log(mixinObj)
