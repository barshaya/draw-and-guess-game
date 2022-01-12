import CanvasDraw from "react-canvas-draw";

import Header from "../components/Header/Header";

const Guess = ({ canvasHeight, canvasWidth }) => {
  return (
    <div>
      <Header />
      <CanvasDraw canvasWidth={canvasWidth} canvasHeight={canvasHeight} />
      <div>guess</div>
      <button>sumit</button>
    </div>
  );
};

export default Guess;
