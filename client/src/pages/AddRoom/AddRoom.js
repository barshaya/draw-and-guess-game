import { useState } from "react";

import './AddRoom.css'

const AddRoom = ({ onAdd }) => {
  const [name, setName] = useState("");
  const numOfMembers = 0;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("please add name");
      return;
    }
    onAdd({ name, numOfMembers });

    setName("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Room</label>
        <input
          type="text"
          placeholder="Add Room Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <input type="submit" value="save Room" className="btn btn-block" />
    </form>
  );
};
export default AddRoom;
