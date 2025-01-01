import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

function HomePage() {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate()

  const handleSubmitForm = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="">Enter RoomCode</label>
          <input
            value={roomCode}
            type="text"
            onChange={(e) => {setRoomCode(e.target.value)}}
            required
            placeholder="Enter Room Code"
          />
        </div>
        <button type="submit">Enter Room</button>
      </form>
    </div>
  );
}

export default HomePage;
