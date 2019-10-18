import { connect } from 'react-redux'

import Cart from '../components/Cart'
import {checkout} from '../actions/index'

const getCartProducts = state => {
  return state.cart.items.map( cartItem => {
    const prod = state.products.all.find(proItem => proItem.id === cartItem.id)
    return {
      id: prod.id,
      title: prod.title,
      price: prod.price,
      quantity: cartItem.quantity
    }
  })
}

const getTotalPrice = state => {
  return getCartProducts(state).reduce((total, prod) => {
    return total + prod.price * prod.quantity
  }, 0)
}

const mapStateToProps = state => {
  return {
    name: state.cart.name,
    cartProducts: getCartProducts(state),
    number: state.count.number,
    totalPrice: getTotalPrice(state)
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     decrement(){
//       dispatch({
//         type: 'DECREMENT'
//       })
//     }
//   }
// }

const mapDispatchToProps = {
  checkout
}

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)

export default CartContainer