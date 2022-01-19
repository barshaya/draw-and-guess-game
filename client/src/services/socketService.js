import io from "socket.io-client";
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '//localhost:4000';

let socket = io(BASE_URL);
console.log({ socket });
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
