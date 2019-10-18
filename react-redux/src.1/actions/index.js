import { getAllProductsApi, buyProducts } from '../api/shop'
import * as types from '../constants/ActionTypes'

export const reciveProducts = products => {
  return ({
    type: types.RECIEVE_PRODUCTS,
    products
  })
}

// 让商品的库存 -1 
// 往购物车的 items 中添加商品
export const handleAddToCart = product => ({
  type: types.ADD_TO_CART,
  product
})

export const getAllProducts = () => {
  return dispatch => {
    getAllProductsApi(products => { 
      dispatch(reciveProducts(products))
    })
  }
}

// 添加购物车 
// export const handleAddToCart = product => dispatch => {
//   // 让商品的库存 -1 
//   // 往购物车的 items 中添加商品
//   dispatch(addToCart(product))
// }

// 结算
export const setCheckoutStatus = checkoutStatus =>({
  type: types.SET_CHECKOUT_STATUS,
  checkoutStatus
})

export const setCartItems = items => ({
  type: types.SET_ITEMS,
  items
})

export const handleCheckout = products => dispatch => {
  console.log('handleCheckout')
  // 备份购物车数据
  const svaedCartProducts = [...products]
  // 清空结算状态
  dispatch(setCheckoutStatus(null))
  // 清空购物车
  dispatch(setCartItems([]))
  // 执行结算操作
  buyProducts(
    products,
    // 成功 设置结算状态 successful
    () => dispatch(setCheckoutStatus('successful')),
    () => {
      // 失败 设置结算状态 failed 还原购物车数据
      dispatch(setCheckoutStatus('failed'))
      dispatch(setCartItems(svaedCartProducts))
    }
  )
}