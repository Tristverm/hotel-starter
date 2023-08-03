import { createContext, useEffect, useState } from "react";

import React from "react";

// importing data
import { roomData } from "../data";

//  creating room context
export const RoomContext = createContext();

function RoomProvider({ children }) {
  const [rooms, setRooms] = useState(roomData);
  console.log(rooms);
  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
}

export default RoomProvider;
