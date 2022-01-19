import io from "socket.io-client";
let socket = io('/');
console.log('socket changed?');
export const socketService = {
  on,
  emit,
};

function on(eventName, cb) {
  socket.on(eventName, cb);
}

function emit(eventName, cb) {
  socket.emit(eventName, cb);
}
