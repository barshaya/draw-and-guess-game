import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Rooms from "../components/Rooms/Rooms";
import Header from "../components/Header/Header";
import AddRoom from './AddRoom/AddRoom'

const Home = ({ userName }) => {
  const [showAddRoom, setShowAddRoom] = useState(false)

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
  }

  return (
    <div>
      <Header userName={userName}/>
      {rooms.length > 0 && !showAddRoom &&
        <Rooms rooms={rooms} onToggle={toggle} />}
      {showAddRoom && <AddRoom onAdd={addRoom} />}
      <Button
        variant="outlined"
        color={showAddRoom ? 'success' : 'info'}
        onClick={()=> setShowAddRoom(!showAddRoom)}>
          {showAddRoom ? 'Cancel' : 'Create Room'}
      </Button>
    </div>
  );
};

export default Home;
