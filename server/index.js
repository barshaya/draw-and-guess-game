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

let players=[]

io.on('connection', socket => {
  console.log('connected');
  socket.on('userLogged', (userName) => {
    players.push(userName)
    console.log(userName,{players})
    if(players.length===1){
      socket.emit('setDrawing')
    }
    if(players.length===2){
      socket.emit('startGame')
      //??
      socket.broadcast.emit('startGame')
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
    
    socket.on('success', ()=>{
      socket.broadcast.emit('changeWaitForDraw');
    })
    
    socket.on("disconnect", () => {
      //broadcast user disconnect -> other player 
      console.log('client is disconnecting ',socket.id);
      socket.broadcast.emit('clientDisconnect');
      players=[];
    });
  })
})

http.listen(4000, function() {
  console.log('listening on port 4000')
})