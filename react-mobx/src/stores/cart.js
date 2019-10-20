import { observable, action, computed }  from 'mobx'
import * as shop from '../api/shop'

class CartStore {
  @observable storeName = 'cart'
  @observable items = []
  @observable checkoutStatus = null

  constructor(rootStore){
    this.rootStore = rootStore
  }

  // 添加购物车
  @action.bound addToCart (product){
    // 是否已经存在
    const prod = this.items.find(item => item.id === product.id)

    if(prod){ // 存在
      prod.quantity++
    }else{ // 不存在
      this.items.push({
        id: product.id,
        quantity: 1
      })
    }

    // 库存-1
    this.rootStore.productsStore.decrementInventory(product)
  }

  // 根据 items 获取购物车展示的列表数据
  @computed get cartProducts(){
    const {
      productsStore:{
        all
      } 
    } = this.rootStore

    return this.items.map(cartItem => {
      const prod = all.find(prodItem => cartItem.id === prodItem.id)
      return {
        id: cartItem.id,
        title: prod.title,
        price: prod.price,
        quantity: cartItem.quantity
      }
    })
  }

  // 获取总价
  @computed get totalPrice(){
    return this.cartProducts.reduce((total, prod) => {
      return total + prod.price * prod.quantity
    }, 0)
  }

  @action.bound setCheckoutStatus(status) {
    this.checkoutStatus = status
  }

  @action.bound setItems(items){
    this.items = items
  }

  // 结算
  @action.bound checkout(){
    // 备份购物车数据
    const cartProducts = this.cartProducts
    const savedProducts = [...cartProducts]

    // 清空结算状态
    this.setCheckoutStatus(null)

    // 清空购物车
    this.setItems([])

    // 结算
    shop.checkout(
      () => {
        this.setCheckoutStatus('成功')
      },
      () => {
        this.setCheckoutStatus('失败')
        this.setItems(savedProducts)
      }
    )

    
  }
}

export default CartStore