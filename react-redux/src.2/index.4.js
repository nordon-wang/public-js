import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux'

import CounterContainer from './containers/CounterContainer'
import store from './store'



function render() {
  ReactDOM.render(
    <Provider store={store}>
      <CounterContainer />
    </Provider>,
    document.getElementById("root")
  )
}

render();

serviceWorker.unregister();
