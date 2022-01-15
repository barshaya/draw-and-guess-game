import Loading from "@mui/material/CircularProgress";

import { useState } from "react";

import GameScreen from "../GameScreen/GameScreen";

import "./WaitingRoom.css"

const WaitingRoom = () => {
  const [gameStart, setGameStart] = useState(false);

  //function that check if the second player connect to the room (request to the server)
  //change gamestart state

  return (
    <>
    {!gameStart &&
      <div className="waiting-room">
        <h3>Waiting For A Player</h3>
        <Loading />
      </div>
    }
    {gameStart && <GameScreen/>}
    </>
  );
};

export default WaitingRoom;
