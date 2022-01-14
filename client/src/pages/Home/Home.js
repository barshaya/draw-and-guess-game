import React from "react";
import { useState } from "react";
import Rooms from "../../components/Rooms/Rooms";
import Header from "../../components/Header/Header";
import AddRoom from "../AddRoom/AddRoom";

const Home = ({ userName }) => {
  const [showAddRoom, setShowAddRoom] = useState(false);

  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomName: "Bar's Room",
      numOfMembers: 2,
    },
    {
      id: 2,
      roomName: "Amnon's Room",
      numOfMembers: 1,
    },
    {
      id: 3,
      roomName: "The Drawers",
      numOfMembers: 0,
    },
  ]);

  //Handler when room clicked
  const enterRoom = (id) => {
    console.log(`Room id : ${id}`);
  };

  //Create Room
  const createRoom = (room) => {
    const id = Math.random(Math.random() * 10000) + 1;
    const newRoom = { id, ...room };
    setRooms([...rooms, newRoom]);
  };

  //Switch between join rooms screen to create room screen
  const switchScreens = () => {
    setShowAddRoom(!showAddRoom)
  }

  return (
    <div>
      <Header userName={userName} />
      {rooms.length > 0 && !showAddRoom && 
        
          <Rooms rooms={rooms} enterRoom={enterRoom} switchScreens={switchScreens} />
      }

      {showAddRoom &&
          <AddRoom createRoom={createRoom} switchScreens={switchScreens} />
      }
    </div>
  );
};

export default Home;
