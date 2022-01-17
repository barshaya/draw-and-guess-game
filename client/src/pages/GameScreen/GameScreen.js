import { useState, useEffect } from "react";

import { socketService } from "../../services/socketService";
import DrawingView from "../../components/DrawingView/DrawingView";
import GuessingView from "../../components/GuessingView/GuessingView";
import WaitingRoom from "../../components/WaitingRoom/WaitingRoom";
import { useNavigate } from "react-router-dom";

import "./GameScreen.css";

const GameScreen = () => {

  console.log('game screen')
  const navigate = useNavigate()

  const [drawer, setDrawer] = useState(false);  
  const [isLoading, setIsLoading] = useState(false);
  const [waitForDraw, setWaitForDraw] = useState(true);
  const [waitForGuess, setWaitForGuess] = useState(false);
  const [drawingVideo, setDrawingVideo] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [points, setPoints] = useState(0);
  const [newPoints, setNewPoints] = useState();
  useEffect(() => {
    console.log({ waitForDraw, waitForGuess, isLoading, drawer });
  }, [waitForDraw, waitForGuess, isLoading, drawer]);
  
  useEffect(() => {
    socketService.on("setDrawing", () => {
      console.log('set drawing')
      setWaitForDraw(false);
      setWaitForGuess(false);
      setDrawer(true);
      setIsLoading(true);
    });
    
    socketService.on("startGame", () => {
      console.log('listen to start game')
      setIsLoading(false);
    });
    
    socketService.on("changeWaitForDraw", () => {
      setWaitForDraw(true);
      setWaitForGuess(false);
      setDrawer(false);
    });
    
    socketService.on("getWordChoosing", ({ word, points }) => {
      setWord(word);
      setNewPoints(points);
    });
    
    socketService.on("getDrawing", (drawingVideo) => {
      setDrawingVideo(drawingVideo);
      setDrawer(false);
      setWaitForGuess(false);
      setWaitForDraw(false);
      setIsLoading(false);
    });
    
  }, []);
  socketService.on("winner", (winner)=>{
    alert(`winner is ${winner}`);
    localStorage.removeItem('users');
    navigate('/')
  })
  
  socketService.on('clientDisconnect',  ()=>{
    console.log("other player disconnect");
    localStorage.removeItem('users');
    navigate('/')
  });
  


  //word choosed
  const [word, setWord] = useState(null);

  
  //function that when the drawer clicking on send they switching roles
  const sendDrawing = (drawingVideo) => {
    //player1
    console.log('send drawing')
    setWaitForGuess(true);
    //send to guess the drawing video
    socketService.emit("sentDrawing", drawingVideo);
  };

  const success = (guessingWord) => {
    if (guessingWord.toLowerCase() === word) {
      setIsSuccess(true);
      setPoints(points + newPoints);
    } else {
      alert("try again");
    }
  };

  const changeRoles = () => {
    setIsSuccess(false);
    setDrawer(!drawer);
    setWaitForDraw(!waitForDraw);
    setWaitForGuess(false);
    socketService.emit("success",points);
  };

  const chooseWord = (word, points) => {
    //send word to server
    socketService.emit("sentWordChoosing", { word, points });
  };
  
  const endGame = () => {
    socketService.emit("endGame");
   
  }
  
  return (
    <div className="game-screen-container">
      {!isLoading&&
          <div className="second-header">
          <div className="score">Score : <div className="score-points">{points}</div> </div>
          <button className="end-game" onClick={endGame}>end game</button>
        </div>
      }
      {drawer && !isLoading && (
        <DrawingView
        onSendClick={sendDrawing}
        waiting={waitForGuess}
        chooseWord={chooseWord}
        />
        )}
      {!drawer && !isLoading && (
        <GuessingView
        waiting={waitForDraw}
          drawingVideo={drawingVideo}
          success={success}
          />
          )}
      {isLoading && <WaitingRoom>waiting for a player to join</WaitingRoom>}
   
      {isSuccess && (
        <div className="success-popup">
          <h3>Success!</h3>
          <h4>you earn {newPoints} points</h4>
          <button
            class="success-close"
            onClick={() => {
              changeRoles();
            }}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default GameScreen;
