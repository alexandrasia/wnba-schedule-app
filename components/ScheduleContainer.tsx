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
        <div
          style={{ display: "flex", gap: 30, justifyContent: "space-between" }}
        >
          <CalendarContainer />
          <TableContainer />
        </div>
      </SelectedGamesProvider>
    </GameScheduleProvider>
  );
};

export default ScheduleContainer;
