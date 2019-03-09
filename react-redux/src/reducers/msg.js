export default function msg(state = '', action) {
  const {type, payload} = action
  console.log('msg')


  switch(type){
    case 'MSG':
      return payload
    default:
      return state
  }
}