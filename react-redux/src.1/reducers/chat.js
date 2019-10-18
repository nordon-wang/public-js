export default function chat(state = [], action) {
  const {type, payload} = action

  switch(type){
    case 'CHAT':
      return [...state, payload]
    default:
      return state
  }
}