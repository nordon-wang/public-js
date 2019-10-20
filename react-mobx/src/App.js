import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Cart from './components/Cart'
import Products from './components/Products'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products />
        <hr />
        <Cart />
      </div>
    );
  }
}

export default App;
