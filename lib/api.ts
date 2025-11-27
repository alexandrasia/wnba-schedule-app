import { ILeagueSchedule } from "@/types/LeagueSchedule";

/**
 * Base URL for WNBA API endpoints
 */
const WNBA_API_BASE = "https://www.wnba.com/api";

/**
 * Response type from the WNBA schedule API
 */
type ScheduleResponse = {
  leagueSchedule: ILeagueSchedule;
};

/**
 * Fetches the WNBA schedule for a given season and region
 * @param season - The season year (e.g., "2025")
 * @param regionId - The region ID (default: 1)
 * @returns The league schedule data
 * @throws Error if the fetch fails
 */
export async function fetchWNBASchedule(
  season: string,
  regionId: number = 1
): Promise<ILeagueSchedule> {
  try {
    const url = `${WNBA_API_BASE}/schedule?season=${season}&regionId=${regionId}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch WNBA schedule: ${response.status} ${response.statusText}`
      );
    }

    const data: ScheduleResponse = await response.json();
    return data.leagueSchedule;
  } catch (error) {
    console.error("Error fetching WNBA schedule:", error);
    throw error;
  }
}
