import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const userName = useRef({ value: '' });
  const navigate = useNavigate();


  const login = () => {
    if (userName?.current?.value) {
      localStorage.setItem("userName", userName.current.value);
      //TODO: send userName to server
      //TODO: redirect to rooms with react route
      navigate('/welcome')
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
        sx={{mt:1}}
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
