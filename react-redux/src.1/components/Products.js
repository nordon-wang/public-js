import React, { Component } from 'react'

class Products extends Component{
  render() {
    let { products, handleAddToCart } = this.props
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((item, index) => (
            <li key={index}>
              <p>
                {item.title} - {item.price}*{item.inventory}
              </p>
              <p>
                <button 
                  disabled={!item.inventory}
                  onClick={() => handleAddToCart(item)}>{item.inventory ? 'add to cart' : 'no add'}</button>
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  componentDidMount(){
    setTimeout(() => {
      this.props.getAllProducts()
    }, 1000)
  }
}

export default Products