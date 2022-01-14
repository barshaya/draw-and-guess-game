import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ userName }) => {
  return (
    <header>
      <h1>
        <span className="h1-draw">Draw&</span>
        <span className="h1-guess">Guess</span>
      </h1>
      {userName && <div className="username">{userName}</div>}
    </header>
  );
};

Header.prototype = {
  name: PropTypes.string.isRequired,
};

export default Header;
