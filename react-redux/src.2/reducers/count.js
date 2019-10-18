const initState = {
  number: 10
}


export default function (state = initState, action) {
  const { type, payload = 1 } = action
  
  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        number: state.number + payload
      }
    case 'DECREMENT':
      return {
        number: state.number - payload
      }
    default:
      return state
  }
}