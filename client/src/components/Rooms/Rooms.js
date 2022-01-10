import Room from "../Room/Room";

const Tasks = ({ rooms, onToggle }) => {
  return (
    <>
      {rooms.map((room) => (
        <Room key={room.id} room={room} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
