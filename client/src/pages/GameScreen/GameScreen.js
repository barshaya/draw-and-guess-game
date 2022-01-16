import { useState, useEffect } from "react";

import { socketService } from "../../services/socketService";
import DrawingView from "../../components/DrawingView/DrawingView";
import GuessingView from "../../components/GuessingView/GuessingView";
import WaitingRoom from "../../components/WaitingRoom/WaitingRoom";
import { useNavigate } from "react-router-dom";

import "./GameScreen.css";

const GameScreen = () => {
  const navigate = useNavigate()

  const [drawer, setDrawer] = useState(false);  
  const [waitForDraw, setWaitForDraw] = useState(true);
  const [waitForGuess, setWaitForGuess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [drawingVideo, setDrawingVideo] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [points, setPoints] = useState(0);
  const [newPoints, setNewPoints] = useState();


  //word choosed
  const [word, setWord] = useState(null);
  useEffect(() => {
    console.log({ waitForDraw, waitForGuess, isLoading, drawer });
  }, [waitForDraw, waitForGuess, isLoading, drawer]);

  useEffect(() => {
    socketService.on("startGame", () => {
      setIsLoading(false);
    });

    socketService.on("setDrawing", () => {
      setWaitForDraw(false);
      setWaitForGuess(false);
      setDrawer(true);
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
  
  socketService.on('clientDisconnect',  ()=>{
    console.log("other player disconnect");
    alert('other player disconnected');
    navigate('/')
  });

  
  //function that when the drawer clicking on send they switching roles
  const sendDrawing = (drawingVideo) => {
    //player1
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
    socketService.emit("success");
  };

  const chooseWord = (word, points) => {
    //send word to server
    socketService.emit("sentWordChoosing", { word, points });
  };
  //user1 wait for user2 to join
  //user 2 joined , wait for tthe draw

  // use1r turn to draw
  // user2 waitng

  //use1r wait for guess
  //user2 guesing until succeed
  //switch
  //user1  waitng for the draw
  //user2 turn to draw

  return (
    <>
      {!isLoading&&
          <div className="score">Score : <div className="score-points">{points}</div></div>
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
    </>
  );
};

export default GameScreen;
