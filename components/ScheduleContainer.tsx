"use client";

import { GameScheduleProvider } from "../contexts/GameScheduleContext";
import { IGameDate } from "../types/LeagueSchedule";
import { Button } from "antd";

export type ScheduleContainerProps = {
  gameDates: IGameDate[];
};

const ScheduleContainer = ({ gameDates }: ScheduleContainerProps) => {
  return (
    <GameScheduleProvider initialGameItems={gameDates}>
      <Button type="primary" onClick={() => console.log("Button clicked!")}>
        Button
      </Button>
      <div>
        {gameDates.map((game, index) => (
          <div key={index}>{game.gameDate}</div>
        ))}
      </div>
    </GameScheduleProvider>
  );
};

export default ScheduleContainer;
