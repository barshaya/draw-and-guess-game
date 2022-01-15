import io from "socket.io-client";
let socket = io("http://localhost:4000");
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
