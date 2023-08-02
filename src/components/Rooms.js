import React from "react";
import { useContext } from "react";
//importing Room Context
import RoomContext from "../context/RoomContext";

const Rooms = () => {
  const { rooms } = useContext(RoomContext);
  console.log(rooms);
  return <div>Rooms</div>;
};

export default Rooms;
