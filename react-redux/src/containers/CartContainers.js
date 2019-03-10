import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { handleCheckout } from '../actions'

const getCartProducts = state => {
  return state.cart.items.map(cartItem => {
    const prod = state.products.all.find(prodItem => cartItem.id === prodItem.id)
    return {
      id:prod.id,
      title:prod.title,
      price:prod.price,
      quantity:cartItem.quantity,
    }
  })
}

const getTotalPrice = state => {
  return getCartProducts(state).reduce((total, prod) => {
    return total += prod.price * prod.quantity
  }, 0)
}

const cartMapStateToProps = state => {
  return {
    cartProducts: getCartProducts(state),
    totalPrice:getTotalPrice(state),
    checkoutStatus:state.cart.checkoutStatus
  }
}

// const cartMapDispatchToProps = dispatch => {
//   return {
//   }
// }

const cartMapDispatchToProps = {
  handleCheckout
}

const cartContainer = connect(
  cartMapStateToProps,
  cartMapDispatchToProps
)(Cart)

export default cartContainer
