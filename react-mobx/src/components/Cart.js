import React, { Component } from 'react'
import { observer, inject }  from 'mobx-react'

@inject('cartStore')
@observer
class Cart extends Component{
  render() {
    const {
      cartStore:{
        storeName,
        cartProducts,
        totalPrice,
        checkoutStatus,
        checkout
      }
    } = this.props

    return (
      <div>
        <h2>{storeName}</h2>

        <ul>
          {
            cartProducts.map(product => {
              return (
                <li key={product.id}>
                  <p> {product.title} - {product.price} * {product.quantity} </p>
                </li>
              )
            })
          }
        </ul>
        
        <div>
          {
            cartProducts.length ? (
              <p>
                <button onClick={checkout}>结算</button>总价: {totalPrice}
              </p>
            ) : 
            '空~~~'
          }
          <p>{checkoutStatus}</p>
        </div>
      </div>
    )
  }
}

export default Cart