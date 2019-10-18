import React, { Component } from 'react'

// const Cart = (props) => {
//   return (
//     <div>
//       <hr />
//       <h1>{props.name}</h1>
//       <button onClick={props.handlerClick}>btn</button>
//     </div>
//   )
// }

class Cart extends Component{
  
  render(){
    const { name, number, decrement, cartProducts, totalPrice, checkout } = this.props
    
    return (
      <div>
        <hr />
        <h1>{name}</h1>
        <h1>{number}</h1>
        <ul>
          {
            cartProducts.map((product, index) => {
              return (
                <li key={index}>
                  <p>{product.title} -- {product.price} * {product.quantity}</p>
                </li>
              )
            })
          }
        </ul>
        {!cartProducts.length ? <p>请添加购物车</p>
         : (
          <div>
            <h3>总计: {totalPrice}</h3>
            <button onClick={() => checkout(cartProducts)}>结算</button>
          </div>
         )}
      </div>
    )
  }
}

export default Cart