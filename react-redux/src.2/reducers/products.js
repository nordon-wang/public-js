const initState = {
  name: 'products模块',
  all: []
}

const all = (state = initState.all, action) => {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS':
      return action.products
    case 'ADD_TO_CART':
      const productId = action.product.id
      const product = state.find(item => item.id === productId)
      product.inventory--
      return [...state]
    default:
      return state
  }
}

export default function (state = initState, action) {
  return {
    all: all(state.all, action),
    name: initState.name
  }
}