import CanvasDraw from "react-canvas-draw";

import React, { useState, useRef } from "react";

import "./Canvas.css";
import Header from "../Header/Header";

const Canvas = ({ canvasHeight, canvasWidth }) => {
  const [color, setColor] = useState("#000");
  const [brushRadius, setBrushRadius] = useState(2);

  const canvasRef = useRef();
  let canvasObject;

  const changeColor = (color) => {
    console.log("hi");
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
  const sendImg = () => {
    canvasObject = canvasRef.current;
    string = canvasObject.getSaveData();
    console.log(string);
  };
  const getImg = () => {
    canvasObject = canvasRef.current;
    canvasObject.loadSaveData(string);
  };

  return (
    <div className="canvas-screen">
      <Header/>
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
        <div className="canvas-tool-item" onClick={getImg}>
          get
        </div>
      </div>
      <CanvasDraw
        brushColor={color}
        brushRadius={brushRadius}
        lazyRadius={1}
        hideGrid={true}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        ref={canvasRef}
      />
    </div>
  );
};

export default Canvas;
