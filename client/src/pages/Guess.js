import CanvasDraw from "react-canvas-draw";

import Loading from "@mui/material/CircularProgress";

import React, { useState ,useRef } from "react";


const Guess = ({ waiting, getDrawingVideo}) => {
  console.log('guess')

  const [isWaiting, setIsWaiting] = useState(!waiting)
  
  const canvasRef = useRef(null);
  let canvasObject;

  const CanvasHeight = window.screen.height - 165;

  const getDraw = () => {
    canvasObject = canvasRef.current;
    let dv = getDrawingVideo();
    if(dv != null){
      canvasObject.loadSaveData(dv);
      setIsWaiting(!isWaiting)
    }
  }

  return (
    <>
      {!isWaiting && (
        <div>
          <button onClick={getDraw}>get</button>
          <CanvasDraw
            canvasWidth={window.screen.width}
            canvasHeight={CanvasHeight}
            ref={canvasRef}
          />

        </div>
      )}
      {isWaiting && 
      <div>
        <h3>Waiting for Drawing </h3>
        <Loading />
      </div>}
    </>
  );
};

export default Guess;
