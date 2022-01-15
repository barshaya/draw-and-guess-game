import Button from "@mui/material/Button";

import "./WordChoosing.css";

var randomWords = require("random-words");

const WordChoosing = () => {
  return (
    <div className="words-container">
      <Button
        sx={{ width: 180, height: 25, mt: 3 }}
        variant="contained"
        color="primary"
      >
        Easy : {randomWords({ exactly: 1, maxLength: 3 })[0]}
      </Button>
      <Button
        sx={{ width: 180, height: 25, mt: 1 }}
        variant="contained"
        color="warning"
      >
        Medium : {randomWords({ exactly: 1, maxLength: 4 })[0]}
      </Button>
      <Button
        sx={{ width: 180, height: 25, mt: 1 }}
        variant="contained"
        color="error"
      >
        Hard : {randomWords({ exactly: 1, maxLength: 5, mt: 1 })[0]}
      </Button>
    </div>
  );
};

export default WordChoosing;
