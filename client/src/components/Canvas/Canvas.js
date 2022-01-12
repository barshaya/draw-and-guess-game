import CanvasDraw from "react-canvas-draw";

const Canvas = ({canvasRef,color,brushRadius,canvasHeight,canvasWidth}) => {

  return (
      <CanvasDraw
        brushColor={color}
        brushRadius={brushRadius}
        lazyRadius={1}
        hideGrid={true}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        ref={canvasRef}
      />
  );
};

export default Canvas;
