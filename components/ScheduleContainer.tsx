"use client";

import { GameScheduleProvider } from "../contexts/GameScheduleContext";
import { IGameDate } from "../types/LeagueSchedule";
import { Button } from "antd";
import TableContainer from "@/components/TableContainer";

export type ScheduleContainerProps = {
  gameDates: IGameDate[];
};

const ScheduleContainer = ({ gameDates }: ScheduleContainerProps) => {
  return (
    <GameScheduleProvider initialGameItems={gameDates}>
      <Button type="primary" onClick={() => console.log("Button clicked!")}>
        Button
      </Button>
      <TableContainer />
    </GameScheduleProvider>
  );
};

export default ScheduleContainer;
