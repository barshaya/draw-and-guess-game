import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Rooms from "../components/Rooms/Rooms";
import Header from "../components/Header/Header";
import AddRoom from './AddRoom/AddRoom'
import WaitingRoom from './WaitingRoom/WaitingRoom'

const Home = ({ userName }) => {
  const [showAddRoom, setShowAddRoom] = useState(false)
  const [showWaitingRoom, setShowWaitingRoom] = useState(false)

  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Bar's Room",
      numOfMembers: 2,
    },
    {
      id: 2,
      name: "Amnon's Room",
      numOfMembers: 1,
    },
    {
      id: 3,
      name: "The Drawers",
      numOfMembers: 0,
    },
  ]);

  const toggle = (id) => {
    console.log(`Room id : ${id}`);
  };

  //Add Room
  const addRoom=(room)=>{
    const id= Math.random(Math.random() * 10000) + 1
    const newRoom= {id,...room}
    setRooms([...rooms,newRoom])
    setShowAddRoom(false)
    setShowWaitingRoom(true)
  }

  return (
    <div>
      <Header userName={userName}/>
      {rooms.length > 0 && !showAddRoom && !showWaitingRoom &&
        <Rooms rooms={rooms} onToggle={toggle} />}
      {showAddRoom && !showWaitingRoom && <AddRoom onAdd={addRoom} />}
      {!showWaitingRoom &&
      <Button
        variant="outlined"
        color={showAddRoom ? 'success' : 'info'}
        onClick={()=> setShowAddRoom(!showAddRoom)}>
          {showAddRoom ? 'Cancel' : 'Create Room'}
      </Button>}
      {showWaitingRoom && <WaitingRoom/>}
    </div>
  );
};

export default Home;
