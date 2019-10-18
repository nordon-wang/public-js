const initState = {
  name: 'cart模块',
  items: [],
  checkoutStatus: null
}

const items = (state = initState.items, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // 判断是否已存在
      // 存在 +1
      // 不存在 添加新的商品
      const productId = action.product.id
      const product = state.find(item => item.id === productId)

      if(product){
        product.quantity++
        return [...state]
      }else{
        return [...state, {
          id: productId,
          quantity: 1
        }]
      }
    case 'SET_ITEMS':
      return action.items
    default:
      return state
  }
}

export default function (state = initState, action) {

  switch (action.type) {
    case 'SET_CHECKOUT_STATUS':
      return {
        ...state,
        checkoutStatus: action.status
      }
    default:
      return {
        items: items(state.items, action),
        checkoutStatus: state.checkoutStatus,
        name: state.name
      }
  }
}