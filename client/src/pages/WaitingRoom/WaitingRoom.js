import Loading from "@mui/material/CircularProgress";

import "./WaitingRoom.css"

const WaitingRoom = () => {
  return (
    <div className="waiting-room">
      <h1>Waiting For A Player</h1>
      <Loading />
    </div>
  );
};

export default WaitingRoom;
