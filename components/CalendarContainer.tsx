import React from "react";
import { Calendar } from "antd";
import { useSelectedGames } from "../contexts/SelectedGamesContext";

const CalendarContainer = () => {
  const { selectedGamesKeys } = useSelectedGames();
  console.log("SelectedGamesKeys in CalendarContainer:", selectedGamesKeys);
  return (
    <div className="flex-1 min-w-0 border border-red-500 h-[66vh]">
      <Calendar />
    </div>
  );
};

export default CalendarContainer;
