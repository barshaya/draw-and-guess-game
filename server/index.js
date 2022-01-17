const cors= require('cors');
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http,{
  cors:{
    origin:"http://localhost:3000",
    methods:["GET","POST"]
  }
})

const corsOptions = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsOptions));

let players=[];
let score=[0,0];
let bool=true;

io.on('connection', socket => {
  console.log('connected');
  socket.on('userLogged', (userName) => {
    players.push(userName)
    console.log('user is connects',userName,{players})
    if(players.length===1){
      socket.emit('setDrawing')   
      socket.emit('startGame')
    }
    if(players.length===2){
      socket.emit('startGame')
      console.log('emit start game') 
    }
    
    //handle drawing
    socket.on('sentDrawing',(drawingVideo)=>{
      socket.broadcast.emit('getDrawing',drawingVideo)
    })
    
    socket.on('sentWordChoosing',( {word,points})=>{
      // players[0].points+=points
      // io.sockets.emit('getWordChoosing',{word,points})
      socket.broadcast.emit('getWordChoosing',( {word,points}))
    })
   
    socket.on('success', (points)=>{
      score[Number(bool)]=points;
      bool=!bool;
      socket.broadcast.emit('changeWaitForDraw');
    })
    
    
    socket.on("disconnect", () => {
      //broadcast user disconnect -> other player 
      console.log('client is disconnecting ',socket.id);
      players=[];
      socket.broadcast.emit('clientDisconnect');
    });

    socket.on('endGame', ()=>{
      if(score[0]==score[1])
        socket.broadcast.emit('winner','both')
      if(score[0]>score[1])
      socket.broadcast.emit('winner','player 1')
      if(score[0]<score[1])
        socket.broadcast.emit('winner','player 2')
      socket.emit('clientDisconnect');
    })
  })
})

http.listen(4000, function() {
  console.log('listening on port 4000')
})