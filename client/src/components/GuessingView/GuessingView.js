import React, { useRef, useEffect } from "react";

import PropTypes from "prop-types";

import CanvasDraw from "react-canvas-draw";

import WaitingRoom from "../WaitingRoom/WaitingRoom";

import "./GuessingView.css";

const GuessingView = ({ waiting, drawingVideo, success }) => {
  var canvasRef = useRef(null);
  var canvasObject = canvasRef.current;

  const CanvasHeight = window.screen.height - 200;

  useEffect(() => {
    canvasObject = canvasRef.current;
    if (canvasObject && drawingVideo) canvasObject.loadSaveData(drawingVideo);
  }, [waiting]);

  return (
    <>
      {!waiting && (
        <div className="guessing-container">
          <h3>Guessing</h3>
          <CanvasDraw
            canvasWidth={window.screen.width}
            canvasHeight={CanvasHeight}
            ref={canvasRef}
            hideGrid={true}
            disabled={true}
          />
          <input className="guessing-container-input" type="text" id="guessingWord"></input>
          <button className="guessing-container-btn"  onClick={()=>success(document.getElementById('guessingWord').value)}> Guess </button>
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
