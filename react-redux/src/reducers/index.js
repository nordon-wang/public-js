import chat from './chat'
import msg from './msg'
import username from './username'
import age from './age'

export default function (state = {}, action = {}){
  console.log('action',state,action)
  return {
    msg: msg(state.msg, action),
    chat: chat(state.chat, action),
    age: age(state.age, action),
    username: username(state.username, action),
  }
}


// function Reducer(state = {}, action ={}){

//   const {type, payload} = action

//   switch(type){
//     case 'CHAT':
//       return Object.assign({}, state, {
//         chat: state.chat.concat(payload)
//       })
//     case 'MSG':
//       return Object.assign({}, state, {
//         msg: payload
//       })
//     case 'USERNAME':
//       return Object.assign({}, state, {
//         username: payload
//       })
//     default:
//       return state
//   }

// }
