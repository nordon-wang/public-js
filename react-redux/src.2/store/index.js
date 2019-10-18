import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

import cart from "../reducers/cart";
import products from '../reducers/products'
import count from '../reducers/count'

const rootReducer = combineReducers({
  cart,
  products,
  count
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(ReduxThunk, logger)
  )
)

export default store
