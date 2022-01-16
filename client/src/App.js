import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login/Login";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";

import "./App.css";
import GameScreen from "./pages/GameScreen/GameScreen";

function App() {

  return (
    <div className="App">
      {/* header */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/game-screen" element={<GameScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
