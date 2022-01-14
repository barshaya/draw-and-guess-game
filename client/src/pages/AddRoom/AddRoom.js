import { useState } from "react";

import Button from "@mui/material/Button";

import WaitingRoom from "../WaitingRoom/WaitingRoom"

import "./AddRoom.css";

const AddRoom = ({ createRoom, switchScreens }) => {
  const [roomName, setRoomName] = useState("");
  const [showWaitingRoom, setShowWaitingRoom] = useState(false);

  const numOfMembers = 0;

  const starGame = (e) => {
    e.preventDefault();
    if (!roomName) {
      alert("please add name");
      return;
    }
    createRoom({ roomName, numOfMembers });
    setShowWaitingRoom(true)
    setRoomName("");
  };

  return (
    <div className="add-room-container">

    {!showWaitingRoom &&
    <>
      <h3>Create New Room</h3>
      <input
        type="text"
        placeholder="Enter Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />

      <Button
        sx={{ width: 140, height: 20 }}
        variant="contained"
        color="secondary"
        onClick={starGame}
      >
        Start Game
      </Button>
      <Button
        sx={{ width: 100, height: 28, mt: 5 }}
        variant="contained"
        color="error"
        onClick={switchScreens}
      >
        Cancel
      </Button>
      </>
    }
    {showWaitingRoom && <WaitingRoom/> }
    </div>
  );
};
export default AddRoom;
