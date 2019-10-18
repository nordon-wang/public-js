export default function statusMessage(state = '', action) {
  const { type, payload } = action
  console.log('statusMessage 的reducer', state);

  switch (type) {
    case 'CHANGE_STATUS':
      return payload
    default:
      return state
  }
}

