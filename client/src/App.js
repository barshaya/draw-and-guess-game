import "./App.css";
import { useState } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  const [userName, setUserName] = useState("");
  
  const onAddName = (name) => {
    if (!name) {
      alert("please add name");
      return;
    }
    setUserName(name);
  };

  return (
    <div className="App">
      {userName === "" ? <Login onAddName={onAddName}/> : <Home userName={userName}/>} 
    </div>
  );
}
export default App;
