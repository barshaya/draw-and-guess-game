import React from "react";
import { useState } from "react";
import Rooms from "../components/Rooms/Rooms";
import Header from "../components/Header/Header";

const Home = ({ userName }) => {
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

    const toggle= (id)=>{
        console.log(id);
    };
    
  return (
    <div>
      <Header userName={userName}></Header>
      {rooms.length > 0 ? (
        <Rooms rooms={rooms} onToggle={toggle} />
      ) : (
        "No Rooms To Show"
      )}
    </div>
  );
};

export default Home;
