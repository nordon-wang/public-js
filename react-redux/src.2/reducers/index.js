import { combineReducers } from 'redux'

import chatLog from './chatLog'
import statusMessage from './statusMessage'
import changeUserName from './userName'


// export default function (state = {}, action) {
//   console.log('index 合并所有的 reducer',state, action);
  
//   return {
//     chatLog: chatLog(state.chatLog, action),
//     statusMessage: statusMessage(state.statusMessage, action),
//     userName: userName(state.userName, action),
//   }
// }

export default combineReducers({
  chatLog,
  statusMessage,
  userName: changeUserName
})