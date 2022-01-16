import PropTypes from "prop-types";

import Loading from "@mui/material/CircularProgress";

import "./WaitingRoom.css"

const WaitingRoom = ({children}) => {
  return (
    <>
      <div className="waiting-room">
        <h3>{children}</h3>
        <Loading />
      </div>
    </>
  );
};

WaitingRoom.propTypes= {
  children : PropTypes.string.isRequired,
}

export default WaitingRoom;
