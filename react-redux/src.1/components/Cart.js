import React, { Component } from 'react'

class Cart extends Component{
  render() {
    const { cartProducts, totalPrice, handleCheckout, checkoutStatus } = this.props

    return (
      <div>
        <h1>Cart</h1>
        <ul>
          {
            cartProducts.map( item => (
              <li key={item.id}>
                {item.title} - {item.quantity} * {item.price}
              </li>
            ))
          }
        </ul>
        {!cartProducts.length && <p>购物车 空空如也</p>}

        <p>
          总价：{totalPrice}
        </p>

        <button 
          disabled={!cartProducts.length}
          onClick={() => handleCheckout(cartProducts)}>结算</button>
        {checkoutStatus && <p>结算 {checkoutStatus}</p> }
      </div>
    )
  }
}

export default Cart