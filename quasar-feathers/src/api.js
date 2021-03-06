import feathers from '@feathersjs/feathers'
import auth from '@feathersjs/authentication-client'
// import socketio from '@feathersjs/socketio-client'
// import io from 'socket.io-client'

// const socket = io('http://localhost:3030', { transports: ['websocket'] })

const api = feathers()
  // .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }))

api.service('/users')
api.service('/messages')

export default api
