import Button from "@mui/material/Button";

import "./WordChoosing.css";

var randomWords = require("random-words");

const WordChoosing = () => {
  return (
    <div className="words-container">
      <span>Easy</span>
      <Button
        sx={{ width: 180, height: 25 , mt: 1 }}
        variant="contained"
        color="primary"
      >
        {randomWords({ exactly: 1, minLength: 2, maxLength: 2})[0]}
      </Button>
      <span>Medium</span>
      <Button
        sx={{ width: 180, height: 25, mt: 1 }}
        variant="contained"
        color="warning"
      >
        {randomWords({ exactly: 1, minLength: 3, maxLength: 4 })[0]}
      </Button>
      <span>Hard</span>
      <Button
        sx={{ width: 180, height: 25, mt: 1 }}
        variant="contained"
        color="error"
      >
       {randomWords({ exactly: 1, minLength: 5})[0]}
      </Button>
      {/* {console.log(document.getElementsByTagName('Button').textContent)} */}
    </div>
  );
};

export default WordChoosing;
