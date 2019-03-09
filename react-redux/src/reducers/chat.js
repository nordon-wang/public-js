export default function chat(state = [], action) {
  const {type, payload} = action
  console.log('chat')


  switch(type){
    case 'CHAT':
      return [...state, payload]
    default:
      return state
  }
}