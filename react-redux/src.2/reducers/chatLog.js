export default function chatLog(state = [], action) {
  const { type, payload } = action
  console.log('chatLog 的reducer', state);
  

  switch (type) {
    case 'ADD_CHAT':
      return [
        ...state,
        ...payload 
      ]
    default:
      return state
  }
}

