export default function username(state = '', action) {
  const {type, payload} = action
  
  switch(type){
    case 'USERNAME':
      return payload
    default:
      return state
  }
}