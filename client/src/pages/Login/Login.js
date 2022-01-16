import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import { socketService } from "../../services/socketService";

const Login = () => {
  const userName = useRef({ value: "" });

  const navigate = useNavigate();

  const login = () => {
    const name=userName.current.value
    if (name) {
      const users=JSON.parse(localStorage.getItem('users'))||[]
      if(users.length>0){
        users.push({name,isDrawing:false})
      }else{
        users.push({name,isDrawing:true})
      }
      localStorage.setItem("users", JSON.stringify(users));
      socketService.emit("userLogged", users[users.length-1]);
      navigate("/game-screen");
    } else {
      //TODO: show error
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
