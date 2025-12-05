"use client";

import { IGameDate } from "../types/LeagueSchedule";
import TableContainer from "@/components/TableContainer";
import CalendarContainer from "@/components/CalendarContainer";

export type ScheduleContainerProps = {
  gameDates: IGameDate[];
};

const ScheduleContainer = ({ gameDates }: ScheduleContainerProps) => {
  return (
    <div className="flex gap-20 justify-between w-full px-8">
      <CalendarContainer />
      <TableContainer />
    </div>
  );
};

export default ScheduleContainer;
