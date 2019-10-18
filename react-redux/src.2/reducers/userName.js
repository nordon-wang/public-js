export default function userName(state = '', action) {
  const { type, payload } = action
  console.log('userName 的reducer', state);

  switch (type) {
    case 'CHANGE_USERNAME':
      return payload
    default:
      return state
  }
}

