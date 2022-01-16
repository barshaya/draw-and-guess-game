import React, { useRef, useEffect } from "react";

import PropTypes from "prop-types";

import CanvasDraw from "react-canvas-draw";

import WaitingRoom from "../WaitingRoom/WaitingRoom";

const GuessingView = ({ waiting, drawingVideo, success }) => {
  console.log("guess");

  var canvasRef = useRef(null);
  var canvasObject = canvasRef.current;

  const CanvasHeight = window.screen.height - 165;

  useEffect(() => {
    canvasObject = canvasRef.current;
    if (canvasObject && drawingVideo) canvasObject.loadSaveData(drawingVideo);
  }, [waiting]);

  return (
    <>
      {!waiting && (
        <div>
          <h3>Guessing</h3>
          <CanvasDraw
            canvasWidth={window.screen.width}
            canvasHeight={CanvasHeight}
            ref={canvasRef}
            hideGrid={true}
            disabled={true}
          />
          <input type="text" id="guessingWord"></input>
          <button onClick={()=>success(document.getElementById('guessingWord').value)}> submit </button>
        </div>
      )}
      {waiting && <WaitingRoom>Waiting for Drawing from player</WaitingRoom>}
    </>
  );
};

GuessingView.propTypes = {
  waiting: PropTypes.bool.isRequired,
  drawingVideo: PropTypes.string,
  success: PropTypes.func.isRequired,
};

export default GuessingView;
