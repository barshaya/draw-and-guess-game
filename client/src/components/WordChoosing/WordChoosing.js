import Button from "@mui/material/Button";

import "./WordChoosing.css";

var randomWords = require("random-words");

const WordChoosing = ({onClick}) => {
  return (
    <div className="words-container">
      <span>Easy</span>
      <Button
        sx={{ width: 180, height: 25 , mt: 1 }}
        variant="contained"
        color="primary"
        id='easy'
        onClick={()=>onClick(document.getElementById('easy').textContent,1)}
      >
        {randomWords({ exactly: 1, minLength: 2, maxLength: 2})[0]}
      </Button>
      <span>Medium</span>
      <Button
        sx={{ width: 180, height: 25, mt: 1 }}
        variant="contained"
        color="warning"
        id='medium'
        onClick={()=>onClick(document.getElementById('medium').textContent,3)}
      >
        {randomWords({ exactly: 1, minLength: 3, maxLength: 4 })[0]}
      </Button>
      <span>Hard</span>
      <Button
        sx={{ width: 180, height: 25, mt: 1 }}
        variant="contained"
        color="error"
        id='hard'
        onClick={()=>onClick(document.getElementById('hard').textContent,5)}
      >
       {randomWords({ exactly: 1, minLength: 5})[0]}
      </Button>
    </div>
  );
};

export default WordChoosing;
