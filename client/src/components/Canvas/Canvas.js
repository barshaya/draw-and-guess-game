import { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import "./Canvas.css";

const Canvas = () => {
  const [color, setColor] = useState("#000");
  const [brushRadius, setBrushRadius] = useState(2);

  const canvasRef = useRef();
  let canvasObject;

  const changeColor = () => {
    setColor("#139");
  };

  const changeRadius = () => {
    setBrushRadius(10);
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
    <div className="canvas">
      <div className="canvas-tools">
        <div className="canvas-tool-item" onClick={changeColor}>
          color
        </div>
        <div className="canvas-tool-item" onClick={changeRadius}>
          radius
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
        hideGrid={false}
        canvasWidth={310}
        canvasHeight={500}
        ref={canvasRef}
      />
    </div>
  );
};

export default Canvas;
