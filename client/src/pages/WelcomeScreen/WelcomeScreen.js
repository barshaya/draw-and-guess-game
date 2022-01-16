import Loading from "@mui/material/CircularProgress";

import { useState } from "react";

const WaitingRoom = () => {
  const [gameStart, setGameStart] = useState(true);

  //function that check if the second player connect to the room (request to the server)
  //change gamestart state

  return (
    <div className="waiting-room">
      <h3>Waiting For A Player</h3>
      <Loading />
    </div>
  );
};

export default WaitingRoom;
