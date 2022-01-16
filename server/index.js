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
    }
    socket.on("disconnect", () => {
      socket.emit('cleanLocalStorage')
      console.log(socket.id);
      players=[];
    });

    //handle drawing
    socket.on('sentDrawing',(drawingVideo)=>{
      socket.broadcast.emit('getDrawing',drawingVideo)
    })
  })

  
})

http.listen(4000, function() {
  console.log('listening on port 4000')
})