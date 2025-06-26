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
        <CalendarContainer />
        <Button type="primary" onClick={() => console.log("Button clicked!")}>
          Button
        </Button>
        <TableContainer />
      </SelectedGamesProvider>
    </GameScheduleProvider>
  );
};

export default ScheduleContainer;
