import * as shop from '../api/shop'


export const receiveProducts = products => {
  return {
    type: 'RECEIVE_PRODUCTS',
    products
  }
}

export const getAllProducts = () => {
  return dispatch => {
    shop.getAllProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
}


export const addToCart = product =>{
  return {
    type: 'ADD_TO_CART',
    product
  }
}

export const handlerAddToCart = product => dispatch => {
  // 1. 让商品库存-1
  // 2. 往购物车 items 中添加商品
  dispatch(addToCart(product))
}

export const setCheckoutStatus = status => {
  return {
    type: 'SET_CHECKOUT_STATUS',
    status
  }
}

export const setCartItems = items => {
  return {
    type: 'SET_ITEMS',
    items
  }
}

export const checkout = (products) => dispatch => {
  // 1. 备份
  const savedCartProducts = products
  // 2. 清空结算状态
  dispatch(setCheckoutStatus(null))
  // 3. 清空购物车
  dispatch(setCartItems([]))
  // 4. 执行结算
  //    成功
  //    失败 还原数据
  shop.buyProducts(products, 
    () => {
      dispatch(setCheckoutStatus('successful'))
    }, 
    () => {
      dispatch(setCheckoutStatus('failed'))
      dispatch(setCartItems(savedCartProducts))
    }
  )
}