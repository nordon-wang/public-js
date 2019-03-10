import { createStore, combineReducers, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'

import cart from '../reducers/cart'
import products from '../reducers/products'


// 计数器 reducer
// function reducer(state = 0, action) {
//   const {type, value = 1} = action
//   if(type === 'INCREMENT'){
//     return state + value
//   }else if(type === 'DECREMENT'){
//     return state - 1
//   }else{
//     return state
//   }
// }

// 购物车 reducer
// function reducer (state = {foo:'foo'}, action){
//   const { type } = action
//   return state
// }

const rootReducers = combineReducers({
  cart,
  products
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store