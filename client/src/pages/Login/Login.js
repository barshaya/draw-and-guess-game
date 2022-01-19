import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import { socketService } from "../../services/socketService";

const Login = () => {
  const userName = useRef({ value: "" });

  const navigate = useNavigate();

  localStorage.removeItem("users");

  const login = () => {
    var name = userName.current.value;
    if (name) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({ name });
      socketService.init()
      localStorage.setItem("users", JSON.stringify(users));
      socketService.emit("userLogged", name);
      navigate("/game-screen");
    } else {
      alert("Please enter your name");
    }
  };

  return (
    <div className="login-window">
      <TextField
        id="userName"
        label="User Name"
        placeholder="Please enter your name"
        color="secondary"
        focused
        inputRef={userName}
      />
      <Button
        sx={{ mt: 1 }}
        variant="outlined"
        color="secondary"
        onClick={login}
      >
        Login
      </Button>
    </div>
  );
};
export default Login;
