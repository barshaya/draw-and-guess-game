import React, { useState, useRef } from "react";
import Canvas from '../../components/Canvas/Canvas'
import CanvasHeader from '../../components/Canvas/CanvasHeader'

const DrawScreen = () => {
    const [color, setColor] = useState("#000");
    const [brushRadius, setBrushRadius] = useState(2);
  
    const canvasRef = useRef();
    let canvasObject;
  
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
        <div>
            <CanvasHeader changeColor={changeColor} changeRadius={changeRadius} eraseAll={eraseAll} remove={remove} undo={undo} sendImg={sendImg} getImg={getImg}/>
            <Canvas canvasRef={canvasRef} color={color} brushRadius={brushRadius} canvasHeight={400} canvasWidth={200}/>
        </div>
    )
}

export default DrawScreen
