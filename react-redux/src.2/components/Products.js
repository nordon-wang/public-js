import React, { Component } from 'react'

// const Products = props => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <button onClick={props.handlerClick}>btn</button>
//     </div>
//   )
// }

class Products extends Component{

  componentDidMount(){
    setTimeout(() => {
      this.props.getAllProducts()
    }, 2000);
  }

  render(){
    const { name, number, products, increment, handlerAddToCart } = this.props
    return (
      <div>
        <h1>{name}</h1>
        <h1>{number}</h1>
        <ul>
          {
            products.map((product, index) => {
              return (
                <li key={index}>
                  <p>{product.title} -- {product.price} -- {product.inventory}</p>
                  <button 
                    disabled={!product.inventory}
                    onClick={() => handlerAddToCart(product)}
                    style={{
                      color: '#f0f',
                      padding: '6px 20px',
                      backgroundColor: '#fff'
                    }}>{product.inventory ? '添加购物车' : '卖完了'}</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={increment}>increment</button>
      </div>
    )
  }
}

export default Products