import { Routes, Route, BrowserRouter } from "react-router-dom";

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import Login from "./pages/Login/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* header */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
