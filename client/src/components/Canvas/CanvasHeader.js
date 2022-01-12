import React from 'react'
import "./Canvas.css";

const CanvasHeader = (changeColor, changeRadius, eraseAll, remove, undo, sendImg, getImg) => {
    return (
        <div className="canvas-tools">
        <div className="canvas-tool-item">
          <label>enter color</label>
          <input type="text" id="brushColor"></input>
          <button onClick={()=>changeColor(document.getElementById("brushColor").value)}>ok</button>
        </div>
        <div className="canvas-tool-item">
          <label>enter radius</label>
          <input type="text" id="brushRadius"></input>
          <button onClick={()=>changeRadius(document.getElementById("brushRadius").value)}>ok</button>       
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
    )
}

export default CanvasHeader
