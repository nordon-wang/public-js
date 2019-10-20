import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import { observable, action, autorun, computed, configure, runInAction, when, reaction }  from 'mobx'
import { observer }  from 'mobx-react'

// import './decorator'
configure({
  // 修改 mobx 中的数据, 必须使用 @action 装饰的函数, 不能直接通过实例进行修改
  enforceActions: 'observed'
})

// 1. 初始化 mobx 容器仓库
class Store {
  @observable count = 2
  @action.bound increment(){
    this.count++
  }

  @observable price = 10
  @computed get totalPrice(){
    return this.price * this.count
  }

  @action.bound change (){
    this.count = 222
  }

  @action.bound asyncChange(){
    setTimeout(() => {
      // this.count = 2
      // this.changeCount()
      // action('changeCount', () => {
      //   this.count = 23
      // })()

      runInAction(() => {
        this.count = 440
      })
    }, 1000);
  }

  @action.bound changeCount(){
    this.count = 222
  }
}

const store = new Store()

autorun(() => {
  console.log('autorun ==> ',store.count);
})

// 只执行一次 多次满足 只执行第一次
when(
  () => {
    return store.count > 100
  },
  () => {
    console.log('when ===> count >  100', store.count);
  }
)

// 每一次改变都会执行
// 只有当被观测的数据被改变时 才会执行
reaction(
  () => {
    // 执行一些业务逻辑操作，返回一些数据给下一个函数使用
    return store.count
  },
  (data, reaction) => {
    console.log('reaction ==> ', data);
    
  }
)

// store.count = 20
store.change()
store.asyncChange()
store.changeCount()

// 2. 在组件中使用 mobx 容器状态
@observer
class App extends React.Component{
  render(){
    const { count, increment, totalPrice } = this.props.store
    return (
      <div>
        <h1>mobx study</h1>
        <p>{count}</p>
        <p>
          <button onClick={increment}>increment</button>
        </p>
        <p>{ totalPrice }</p>
        <p>{ totalPrice }</p>
      </div>
    )
  }
}
// 3. 在组件中发起 action 修改容器状态

ReactDOM.render(<App store={new Store()} />, document.getElementById('root'));

serviceWorker.unregister();

// mixinObj.say()
// mixinObj.eat()
// console.log(mixinObj)
