import React, { useState, useRef } from "react";

import PropTypes from "prop-types";

import CanvasDraw from "react-canvas-draw";

import WaitingRoom from "../WaitingRoom/WaitingRoom";

import "./DrawingView.css";
import WordChoosing from "../WordChoosing/WordChoosing";

const DrawingView = ({ onSendClick, waiting ,chooseWord}) => {
  const [wordChoosing, setWordChoosing] = useState(null);

  console.log(waiting);
  const [color, setColor] = useState("#000");
  const [brushRadius, setBrushRadius] = useState(2);
  var canvasRef = useRef(null);
  var canvasObject = canvasRef.current;
  console.log(canvasObject);

  const changeColor = (color) => {
    setColor(color);
  };

  const changeRadius = (radius) => {
    setBrushRadius(Number(radius));
  };

  const remove = () => {
    setColor("#ffff");
  };

  const eraseAll = () => {
    canvasObject = canvasRef.current;
    canvasObject.eraseAll();
  };

  const undo = () => {
    canvasObject = canvasRef.current;
    canvasObject.undo();
  };

  const sendImg = () => {
    canvasObject = canvasRef.current;
    var string = canvasObject.getSaveData();
    onSendClick(string);
  };

  const CanvasHeight = window.screen.height - 165;

  const onChooseWord = (word,points) => {
    console.log('drawing chose word', word)
    setWordChoosing(word);
    chooseWord(word,points)
  }

  return (
    <div className="canvas-container">
      {!waiting && !wordChoosing &&
        <WordChoosing onClick={onChooseWord}/>
      }
      {!waiting && wordChoosing && (
        <>
          <h3>Drawing</h3>
          <div>
            <span>word : {wordChoosing}</span>
          </div>
          <div className="canvas-tools">
            <div className="canvas-tool-item">
              <label>enter color</label>
              <input type="text" id="brushColor"></input>
              <button
                onClick={() =>
                  changeColor(document.getElementById("brushColor").value)
                }
              >
                ok
              </button>
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

DrawingView.propTypes= {
  onSendClick: PropTypes.func.isRequired,
  waiting: PropTypes.bool.isRequired
}

export default DrawingView;
