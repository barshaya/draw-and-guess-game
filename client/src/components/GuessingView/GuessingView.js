import React, { useRef, useEffect, useState } from "react";

import PropTypes from "prop-types";

import CanvasDraw from "react-canvas-draw";

import WaitingRoom from "../WaitingRoom/WaitingRoom";

import "./GuessingView.css";

const GuessingView = ({ waiting, drawingVideo, success }) => {
  window.addEventListener("resize", () => {
    setHeight(window.screen.height - 330);
    setWidth(window.screen.width);
  });
  const [height, setHeight] = useState(window.screen.height - 330);
  const [width, setWidth] = useState(window.screen.width);

  var canvasRef = useRef(null);
  var canvasObject = canvasRef.current;

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
            canvasWidth={width}
            canvasHeight={height}
            ref={canvasRef}
            hideGrid={true}
            disabled={true}
          />
          <input
            className="guessing-container-input"
            type="text"
            id="guessingWord"
          ></input>
          <button
            className="guessing-container-btn"
            onClick={() =>
              success(document.getElementById("guessingWord").value)
            }
          >
            {" "}
            Guess{" "}
          </button>
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
