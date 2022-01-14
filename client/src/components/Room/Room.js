import PropTypes from "prop-types";
import "./Room.css";

const Room = ({ room, enterRoom }) => {
  return (
    <button
      className='room-item'
      onClick={()=>enterRoom(room.id)}
      disabled={room.numOfMembers === 2}
    >
      <h3>{room.roomName}</h3>
      <span>{room.numOfMembers}</span>
    </button>
  );
};

Room.propTypes = {
  room: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};
export default Room;
