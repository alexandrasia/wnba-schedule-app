import ScheduleContainer from "@/components/ScheduleContainer";
import {IGameDate} from "../types/LeagueSchedule";

export default async function Page() {
  const data = await fetch('https://www.wnba.com/api/schedule?season=2025&regionId=1');
  const json = await data.json();
  return (
    <>
      <h1 style={{textAlign: 'center', marginTop: '50px'}}>WNBA Calendar App</h1>
      <ScheduleContainer gameDates={json.leagueSchedule.gameDates as IGameDate[]}/>
    </>
  );
};