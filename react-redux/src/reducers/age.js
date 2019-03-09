export default function age(state = [], action) {
  const {type, payload} = action
  console.log('age', state, action)


  switch(type){
    case 'AGE':
      return [...state, payload]
    default:
      return state
  }
}