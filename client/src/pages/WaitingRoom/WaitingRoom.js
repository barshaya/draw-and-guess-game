import Loading from "@mui/material/CircularProgress";

import "./WaitingRoom.css"

const WaitingRoom = () => {
  return (
    <div className="waiting-room">
      <h3>Waiting For A Player</h3>
      <Loading />
    </div>
  );
};

export default WaitingRoom;
