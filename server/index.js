const cors = require("cors");
const app = require("express")();
const express=require('express')
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const corsOptions = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOptions));
app.use(express.static("public"));


let players = [];
let score = [0, 0];
let bool = true;

io.on("connection", (socket) => {
  socket.on("userLogged", (userName) => {
    players.push(userName);
    if (players.length === 1) {
      socket.emit("setDrawing");
    }
    if (players.length === 2) {
      socket.emit("startGame");
      socket.broadcast.emit("startGame");
    }

    socket.on("sentDrawing", (drawingVideo) => {
      socket.broadcast.emit("getDrawing", drawingVideo);
    });

    socket.on("sentWordChoosing", ({ word, points }) => {
      socket.broadcast.emit("getWordChoosing", { word, points });
    });

    socket.on("success", (points) => {
      score[Number(bool)] = points;
      bool = !bool;
      socket.broadcast.emit("changeWaitForDraw");
    });

    socket.on("disconnect", () => {
      players = [];
      socket.broadcast.emit("clientDisconnect");
    });

    socket.on("endGame", () => {
      var win = "";
      if (score[0] == score[1]) win = "both";
      if (score[0] > score[1]) win = "player 1";
      if (score[0] < score[1]) win = "player 2";
      socket.emit("winner", win);

      socket.disconnect();
    });
  });
});

http.listen(process.env.PORT || 4000, function () {
  console.log("listening on port 4000");
});
