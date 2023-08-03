import React from "react";
import { useContext } from "react";
//importing Room Context
import RoomContext from "../context/RoomContext";

// importing rooms
import Room from "../components/Room"

const Rooms = () => {
  const { rooms } = useContext(RoomContext);
  console.log(rooms);
  return (
    <section className="bg-pink-200 py-4">
      <div className="container mx-auto lg:px-0">
        <div>
          {rooms.map((room) => {
            return <Room />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
