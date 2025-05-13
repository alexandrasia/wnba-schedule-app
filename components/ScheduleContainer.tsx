'use client'

import { GameScheduleProvider } from "../contexts/GameScheduleContext";
import {IGameDate} from "../types/LeagueSchedule";


export type ScheduleContainerProps = {
  gameDates: IGameDate[];
}

const ScheduleContainer = ({ gameDates }: ScheduleContainerProps) => {

  return (
    <GameScheduleProvider initialGameItems={gameDates}>
      <div>
        {gameDates.map((game, index) => (
          <div key={index}>{game.gameDate}</div>
        ))}
      </div>
    </GameScheduleProvider>
  );
};

export default ScheduleContainer;