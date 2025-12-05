import ScheduleContainer from "@/components/ScheduleContainer";
import ScheduleHeader from "@/components/ScheduleHeader";
import { GameScheduleProvider } from "@/contexts/GameScheduleContext";
import { fetchWNBASchedule } from "@/lib/api";

export default async function Page() {
  const leagueSchedule = await fetchWNBASchedule("2025");

  return (
    <div className="min-h-screen">
      <GameScheduleProvider initialGameItems={leagueSchedule.gameDates}>
        <ScheduleHeader />
        <ScheduleContainer gameDates={leagueSchedule.gameDates} />
      </GameScheduleProvider>
    </div>
  );
}
