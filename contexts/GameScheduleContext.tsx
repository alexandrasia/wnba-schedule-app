"use client";

import React, { createContext, useState, useContext } from "react";
import { IGameDate } from "../types/LeagueSchedule";

interface GameScheduleContextType {
  gameItems: IGameDate[];
  setGameItems: React.Dispatch<React.SetStateAction<IGameDate[]>>;
}

export const GameScheduleContext = createContext<GameScheduleContextType | undefined>(undefined);

GameScheduleContext.displayName = "GameScheduleContext";

export const GameScheduleProvider = ({ children, initialGameItems }: { children: React.ReactNode; initialGameItems: IGameDate[] }) => {
  const [gameItems, setGameItems] = useState<IGameDate[]>(initialGameItems);

  return (
    <GameScheduleContext.Provider value={{gameItems, setGameItems}}>
      {children}
    </GameScheduleContext.Provider>
  );
};

export const useGameSchedule = () => {
  const context = useContext(GameScheduleContext);
  if (!context) {
    throw new Error("No GameSchedule context");
  }
  return context;
}
