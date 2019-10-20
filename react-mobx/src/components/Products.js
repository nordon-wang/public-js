import React, { Component } from 'react'
import { observer, inject }  from 'mobx-react'

// 顺序要注意 inject 在 observer 之前
@inject('productsStore', 'cartStore')
@observer
class Products extends Component{
  render() {
    const {
      productsStore:{
        storeName,
        all
      },
      cartStore:{
        addToCart
      }
    } = this.props

    return (
      <div>
        <h2>{storeName}</h2>
        <ul>
          {
            all.map(product => {
              return (
                <li key={product.id}>
                  <p>{product.title} -- {product.price} -- {product.inventory}</p>
                  
                  <p>
                    <button
                      disabled={!product.inventory}
                      onClick={() => addToCart(product)}>
                      {product.inventory ? '添加购物车' : '卖完啦～～'}
                    </button>
                  </p>
                </li>
              )
            })
          }
        </ul> 
      </div>
    )
  }

  componentDidMount(){
    this.props.productsStore.getAllProducts()
  }
}

export default Products