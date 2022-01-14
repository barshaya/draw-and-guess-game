import CanvasDraw from "react-canvas-draw";

import React, { useState, useRef } from "react";

import "./Canvas.css";

const Canvas = ({onSendClick}) => {
  const [color, setColor] = useState("#000");
  const [brushRadius, setBrushRadius] = useState(2);

  const canvasRef = useRef(null);
  let canvasObject = canvasRef.current;

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

  let string;
  const sendImg = (e) => {
    e.preventDefault();
    canvasObject = canvasRef.current;
    string= canvasObject.getSaveData();
    onSendClick(canvasObject.getSaveData());
  };

  // const getImg = () => {
  //   canvasObject = canvasRef.current;
  //   canvasObject.loadSaveData(string);
  // };

  const CanvasHeight = window.screen.height - 165;

  return (
    <div className="canvas-container">
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
        {/* <div className="canvas-tool-item" onClick={getImg}>
          get
        </div> */}
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
    </div>
  );
};

export default Canvas;
