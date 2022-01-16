import CanvasDraw from "react-canvas-draw";

import Loading from "@mui/material/CircularProgress";

import React, {useRef, useEffect } from "react";

const Guess = ({ waiting ,drawingVideo,success}) => {
  console.log("guess");

  // const [isWaiting, setIsWaiting] = useState(waiting)

  var canvasRef = useRef(null);
  var canvasObject=canvasRef.current;

  const CanvasHeight = window.screen.height - 165;

  // const getDraw = () => {
  //   canvasObject = canvasRef.current;
  //   if(dv != null){
  //     canvasObject.loadSaveData(dv);
  //     // setIsWaiting(!isWaiting)
  //   }
  // }

  useEffect(() => {
    canvasObject = canvasRef.current;
    if(canvasObject && drawingVideo)
    {
      canvasObject.loadSaveData(drawingVideo);
    }
  }, [waiting]);

  return (
    <>
      {!waiting && (
        <div>
          {/* <button onClick={getDraw}>get</button> */}
          <CanvasDraw
            canvasWidth={window.screen.width}
            canvasHeight={CanvasHeight}
            ref={canvasRef}
          />
          <button onClick={success}> success</button>
        </div>
      )}
      {waiting && (
        <div>
          <h3>Waiting for Drawing from player </h3>
          <Loading />
        </div>
      )}
    </>
  );
};

export default Guess;
