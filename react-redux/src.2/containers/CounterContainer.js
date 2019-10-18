import { connect } from 'react-redux'

import  Counter from "../components/Counter";

const mapStateToProps = state => {
  return {
    foo: 'bar',
    count: state.count
  }
}


const mapDispatchToProps = dispatch => {
  return {
    increment () {
      dispatch({
        type: 'INCREMENT'
      })
    },
    decrement(){
      dispatch({
        type: 'DECREMENT'
      })
    }
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer