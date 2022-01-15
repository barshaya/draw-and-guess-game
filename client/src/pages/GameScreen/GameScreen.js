import { useState, useEffect } from "react";

import PropTypes from "prop-types";

import Loading from "@mui/material/CircularProgress";

import Canvas from "../../components/Canvas/Canvas";
import Guess from "../Guess";
import { socketService } from "../../services/socketService";

const GameScreen = () => {
  const [waitForDraw, setWaitForDraw] = useState(true);
  const [waitForGuess, setWaitForGuess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [drawer, setDrawer] = useState(false);
  const [drawingVideo, setDrawingVideo] = useState(null);

  useEffect(() => {
    console.log({ waitForDraw, waitForGuess, isLoading, drawer });
  }, [waitForDraw, waitForGuess, isLoading, drawer]);

  useEffect(() => {
    socketService.on("startGame", (players) => {
      console.log("startGame");
      setIsLoading(false);
      setWaitForDraw(false);
      //   if (players[0].isDrawing) {
      //     setDrawer(true);
      //     setWaitForDraw(false);
      //     setWaitForGuess(false)
      //   }
    });

    socketService.on("setDrawing", (isDraw) => {
      console.log("set drawing", { isDraw });
      setDrawer(isDraw);
    });
  }, []);

  useEffect(() => {
    if (!drawer) {
      socketService.on("getDrawing", (drawingVideo) => {
        console.log("getDrawing", { drawer });
        setDrawingVideo(drawingVideo);
        //    setDrawer(true)
        setWaitForGuess(false);
        setWaitForDraw(false);
        setIsLoading(false);
      });
    }
  }, [drawer]);

  // const [drawingVideo, setDrawingVideo] = useState(null);

  //function that when the drawer clicking on send they switching
  const sendDrawing = (drawingVideo) => {
    console.log("sent drawinggg");
    // setDrawer(!drawer);
    setWaitForGuess(true);

    socketService.emit("sentDrawing", drawingVideo);
    //send to guess the drawing video
  };

  const success = () => {
    console.log("success");
    setDrawer(!drawer);
    setWaitForDraw(!waitForDraw);
    setWaitForGuess(false);
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
      {drawer && !isLoading && (
        <Canvas onSendClick={sendDrawing} waiting={waitForGuess} />
      )}
      {!drawer && !isLoading && (
        <Guess
          waiting={waitForDraw}
          drawingVideo={drawingVideo}
          success={success}
        />
      )}
      {isLoading && <Loading />}
    </>
  );
};

GameScreen.prototype = {
  drawer: PropTypes.string.isRequired,
};

export default GameScreen;
