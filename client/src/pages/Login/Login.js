import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";

const Login = ({ onAddName }) => {
  return (
    <div className="login-window">
      <TextField
        id="userName"
        label="Please enter your name"
        color="secondary"
        focused
      />
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => onAddName(document.getElementById("userName").value)}
      >
        Login
      </Button>
    </div>
  );
};
export default Login;
