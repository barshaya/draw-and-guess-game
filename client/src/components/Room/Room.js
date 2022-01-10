import PropTypes from "prop-types";
import "./Room.css";

const Room = ({ room, onToggle }) => {
  return (
    <div
      className={`room ${room.numOfMembers === 2 ? "full" : ""}`}
      onDoubleClick={()=>onToggle(room.id)}
    >
      <h3>{room.name}</h3>
      <span>{room.numOfMembers}</span>
    </div>
  );
};

Room.propTypes = {
  room: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};
export default Room;
