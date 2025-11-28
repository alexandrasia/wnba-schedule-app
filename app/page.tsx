import ScheduleContainer from "@/components/ScheduleContainer";
import { fetchWNBASchedule } from "@/lib/api";

export default async function Page() {
  const leagueSchedule = await fetchWNBASchedule("2025");

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        WNBA Calendar App
      </h1>
      <ScheduleContainer gameDates={leagueSchedule.gameDates} />
    </>
  );
}
