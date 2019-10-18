import React, { Component } from 'react';

// 计算器
import CounterContainers from './containers/CounterContainers'

// 购物车
import CartContainers from './containers/CartContainers'
import ProductContainers from './containers/ProductContainers'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Products -- Cart</h1>
        <hr />
        <ProductContainers />
        <hr />
        <CartContainers />
        <hr />
      </div>
    );
  }
}

//#region
// region
//#endregion

export default App;
