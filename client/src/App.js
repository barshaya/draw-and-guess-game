import "./App.css";
import { useState } from "react";
//import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Room from "./components/Room/Room";
import Rooms from './components/Rooms/Rooms';

function App() {
  const [userName, setUserName] = useState("");
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

  const onAddName = (name) => {
    setUserName(name);
  };

  const toggle= (id)=>{
    console.log(id);
  };

  return (
    <div className="App">
      {userName === "" ? (
        <Login onAddName={onAddName}></Login>
      ) : (
        //<Header name={userName}></Header>
        Rooms.length > 0 ? 
          <Rooms rooms={rooms} 
          onToggle={toggle}/> : 'No Rooms To Show'
      )}
    </div>
  );
}
export default App;
