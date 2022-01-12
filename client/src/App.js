import "./App.css";
import { useState } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";

import Canvas from './components/Canvas/Canvas'
import Guess from './pages/Guess'

function App() {
  const [userName, setUserName] = useState("");
  
  const onAddName = (name) => {
    setUserName(name);
  };

  return (
    <div className="App">
      {userName === "" ? <Login onAddName={onAddName}/> : <Home userName={userName}/>} 
      {/* <Canvas canvasHeight={300} canvasWidth={385}/> */}
      {/* <Guess canvasHeight={300} canvasWidth={385}/> */}
    </div>
  );
}
export default App;
