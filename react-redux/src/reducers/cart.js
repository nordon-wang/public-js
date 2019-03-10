import * as types from '../constants/ActionTypes'

const initialState = {
  // 存储商品的 id 数量 -- {id: xx, quantity: xx}
  items: [],
  // null 'successful' 'failed'
  checkoutStatus: null
}

const items = (state = initialState.items, action) => {
  
  const { type } = action

  switch(type) {
    case types.ADD_TO_CART :
      // 判断购物车中 是否已存在
      const productId = action.product.id
      const product =  state.find(item => item.id === productId)

      // 存在 数量+1
      if(product){
        product.quantity++
        return [...state]
      }

      // 不存在 添加新的商品到购物车
      return [...state, {
        id: productId,
        quantity: 1
      }]
    case types.SET_ITEMS :
      return action.items
    default:
      return state
  }
}

export default (state = initialState, action) => {
  const { type } = action

  switch(type){
    case types.SET_CHECKOUT_STATUS:
      return {
        ...state,
        checkoutStatus:action.checkoutStatus
      }
    default :
      return {
        items: items(state.items, action),
        checkoutStatus: state.checkoutStatus
      }
  }
  
}