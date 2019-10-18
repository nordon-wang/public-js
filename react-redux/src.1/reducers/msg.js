export default function msg(state = '', action) {
  const {type, payload} = action

  switch(type){
    case 'MSG':
      return payload
    default:
      return state
  }
}