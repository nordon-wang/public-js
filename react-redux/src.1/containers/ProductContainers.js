import { connect } from 'react-redux'
import Products from '../components/Products'
import { getAllProducts, handleAddToCart } from '../actions'

const productsMapStateToProps = state => {
  return {
    products: state.products.all
  }
}

// const productsMapDispatchToProps = dispatch => {
//   return {
//     getAllProducts(){
//       dispatch(getAllProducts())
//       // 发起请求
//       // 拿到数据
//       // 调用 dispatch
//       // dispatch({
//       //   type:'RECIEVE_PRODUCTS',
//       //   products:[1,2,3]
//       // })
//     }
//   }
// }

const productsMapDispatchToProps = {
  getAllProducts,
  handleAddToCart
}

const productsContainer = connect(
  productsMapStateToProps,
  productsMapDispatchToProps
)(Products)

export default productsContainer
