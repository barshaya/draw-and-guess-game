import Room from "../Room/Room";

import './Rooms.css'

const Tasks = ({ rooms, onToggle }) => {
  return (
    <div className="rooms-container">
      {rooms.map((room) => (
        <Room key={room.id} room={room} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default Tasks;
