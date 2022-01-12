import PropTypes from "prop-types";
import "./Room.css";

const Room = ({ room, onToggle }) => {
  return (
    <button
      className='room-item'
      onDoubleClick={()=>onToggle(room.id)}
      disabled={room.numOfMembers === 2}
    >
      <h3>{room.name}</h3>
      <span>{room.numOfMembers}</span>
    </button>
  );
};

Room.propTypes = {
  room: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};
export default Room;
