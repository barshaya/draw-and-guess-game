import "./App.css";
import { useState } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";

function App() {
  const [userName, setUserName] = useState("");
  
  const onAddName = (name) => {
    setUserName(name);
  };

  return (
    <div className="App">
      {userName === "" ? <Login onAddName={onAddName}/> : <Home userName={userName}/>}
      
      {/* {userName && <Login onAddName={onAddName}></Login>}
      {!userName && <Home userName={userName}></Home>} */}
    </div>
  );
}
export default App;
