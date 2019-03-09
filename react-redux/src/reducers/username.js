export default function username(state = '', action) {
  const {type, payload} = action
  
  console.log('username')

  switch(type){
    case 'USERNAME':
      return payload
    default:
      return state
  }
}