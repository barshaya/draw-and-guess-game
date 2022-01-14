import Button from "@mui/material/Button";

import Room from "../Room/Room";

import "./Rooms.css";

const Tasks = ({ rooms, enterRoom, switchScreens }) => {
  return (
    <div className="rooms-container">
      {rooms.map((room) => (
        <Room key={room.id} room={room} enterRoom={enterRoom} />
      ))}
      <Button
        sx={{ width: 140, height: 28, mt: 2 }}
        variant="contained"
        color="secondary"
        onClick={switchScreens}
      >
        Create Room
      </Button>
    </div>
  );
};

export default Tasks;
