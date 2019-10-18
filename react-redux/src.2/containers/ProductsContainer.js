import { connect } from 'react-redux'

import Products from '../components/Products'
import { getAllProducts, handlerAddToCart } from '../actions'

const mapStateToProps = state => {
  return {
    name: state.products.name,
    number: state.count.number,
    products: state.products.all
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     increment(){
//       dispatch({
//         type: 'INCREMENT'
//       })
//     },
//     getALlProducts(){
//       // dispatch({
//       //   type: 'RECEIVE_PRODUCTS',
//       //   products: [1,2,3]
//       // })
//       dispatch(getAllProducts())
//     }
//   }
// }

const mapDispatchToProps = {
  getAllProducts,
  handlerAddToCart
}

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export default ProductsContainer