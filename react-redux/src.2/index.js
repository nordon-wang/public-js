import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux'

// import CounterContainer from './containers/CounterContainer'
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import store from './store'



function render() {
  ReactDOM.render(
    <Provider store={store}>
      <ProductsContainer />
      <CartContainer />
    </Provider>,
    document.getElementById("root")
  )
}

render();

serviceWorker.unregister();
