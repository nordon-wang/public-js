import * as types from '../constants/ActionTypes'

const initialState = {
  all: []
}

const all = (state = initialState.all, action ) => {
  
  const { type } = action

  switch(type) {
    case types.RECIEVE_PRODUCTS:
      return action.products
    case types.ADD_TO_CART:
      const productId = action.product.id
      const product = state.find(item => item.id === productId)
      console.log('products ---')

      product.inventory--
      return [...state]
    default:
      return state
  }
}

export default (state = initialState, action) => {
  return {
    all: all(state.all, action)
  }
}