import { createStore } from 'redux'


function reducer(state = 0, action) {
  const {type, value = 1} = action
  if(type === 'INCREMENT'){
    return state + value
  }else if(type === 'DECREMENT'){
    return state - 1
  }else{
    return state
  }
}

const store = createStore(reducer)

export default store