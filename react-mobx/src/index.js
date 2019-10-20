import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import RootStore from './stores/index'
import { Provider }  from 'mobx-react'

ReactDOM.render(
  <Provider {...new RootStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

// mixinObj.say()
// mixinObj.eat()
// console.log(mixinObj)
