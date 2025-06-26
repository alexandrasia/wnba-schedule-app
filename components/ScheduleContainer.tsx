"use client";

import { GameScheduleProvider } from "../contexts/GameScheduleContext";
import { IGameDate } from "../types/LeagueSchedule";
import { Button } from "antd";
import TableContainer from "@/components/TableContainer";
import { SelectedGamesProvider } from "../contexts/SelectedGamesContext";
import CalendarContainer from "@/components/CalendarContainer";

export type ScheduleContainerProps = {
  gameDates: IGameDate[];
};

const ScheduleContainer = ({ gameDates }: ScheduleContainerProps) => {
  return (
    <GameScheduleProvider initialGameItems={gameDates}>
      <SelectedGamesProvider>
        <div className="flex gap-20 justify-between w-full">
          <CalendarContainer />
          <TableContainer />
        </div>
      </SelectedGamesProvider>
    </GameScheduleProvider>
  );
};

export default ScheduleContainer;
