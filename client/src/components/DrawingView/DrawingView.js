import React, { useState, useRef } from "react";

import CanvasDraw from "react-canvas-draw";
import PropTypes from "prop-types";

import WaitingRoom from "../WaitingRoom/WaitingRoom";
import WordChoosing from "../WordChoosing/WordChoosing";

import "./DrawingView.css";

const DrawingView = ({ onSendClick, waiting, chooseWord }) => {
  const [wordChoosing, setWordChoosing] = useState(null);
  const [color, setColor] = useState('black');
  const [brushRadius, setBrushRadius] = useState(2);

  const canvasRef = useRef(null);
  const CanvasHeight = window.screen.height - 165;

  const changeColor = (brushColor) => {
    setColor(brushColor)
  };

  const changeRadius = (radius) => {
    setBrushRadius(Number(radius));
  };

  const remove = () => {
    setColor('white');
  };

  const eraseAll = () => {
    canvasRef.current.eraseAll();
  };

  const undo = () => {
    canvasRef.current.undo();
  };

  const sendImg = () => {
    onSendClick(canvasRef.current.getSaveData());
  };

  const onChooseWord = (word, points) => {
    setWordChoosing(word);
    chooseWord(word, points);
  };

  return (
    <div className="drawing-view-container">
      {!waiting && !wordChoosing && <WordChoosing onClick={onChooseWord} />}
      {!waiting && wordChoosing && (
        <>
          <h3>Drawing</h3>
          <div class="word-container">
            You are drawing :<div class="word"> {wordChoosing}</div>
          </div>
          <div className="canvas-tools">
            <div className="canvas-tool-item">
              <label>colors</label>
              <div className="canvas-colors-tool">
                <button
                  className="btn btn-black"
                  onClick={() => changeColor("black")}
                ></button>
                <button
                  className="btn btn-red"
                  onClick={() => changeColor("red")}
                ></button>
                <button
                  className="btn btn-yellow"
                  onClick={() => changeColor("yellow")}
                ></button>
                <button
                  className="btn btn-blue"
                  onClick={() => changeColor("blue")}
                ></button>
              </div>
            </div>
            <div className="canvas-tool-item">
              <label>enter radius</label>
              <input type="text" id="brushRadius"></input>
              <button
                onClick={() =>
                  changeRadius(document.getElementById("brushRadius").value)
                }
              >
                ok
              </button>
            </div>
            <div className="canvas-tool-item" onClick={remove}>
              remove
            </div>
            <div className="canvas-tool-item" onClick={eraseAll}>
              reset
            </div>
            <div className="canvas-tool-item" onClick={undo}>
              undo
            </div>
            <div className="canvas-tool-item" onClick={sendImg}>
              send
            </div>
          </div>
          <CanvasDraw
            brushColor={color}
            brushRadius={brushRadius}
            lazyRadius={1}
            hideGrid={true}
            canvasWidth={window.screen.width}
            canvasHeight={CanvasHeight}
            ref={canvasRef}
          />
        </>
      )}
      {waiting && <WaitingRoom>waiting for a guess</WaitingRoom>}
    </div>
  );
};

DrawingView.propTypes = {
  onSendClick: PropTypes.func.isRequired,
  waiting: PropTypes.bool.isRequired,
};

export default DrawingView;
