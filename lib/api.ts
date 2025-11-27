import { ILeagueSchedule } from "@/types/LeagueSchedule";
import { cookies } from "next/headers";
import mockDataPast from "@/test/wnba-schedule-example.json";
import mockDataFuture from "@/test/wnba-schedule-future.json";

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
 * Data source type for development
 */
type DataSource = "mock" | "real";

/**
 * Mock file type for development
 */
type MockFile = "past" | "future";

/**
 * Gets the current data source from cookies
 * @returns The data source ("mock" or "real")
 */
function getDataSource(): DataSource {
  const cookieStore = cookies();
  const dataSource = cookieStore.get("wnba-dev-data-source")?.value;
  return (dataSource as DataSource) || "real";
}

/**
 * Gets the current mock file preference from cookies
 * @returns The mock file ("past" or "future")
 */
function getMockFilePreference(): MockFile {
  const cookieStore = cookies();
  const mockFile = cookieStore.get("wnba-dev-mock-file")?.value;
  return (mockFile as MockFile) || "future";
}

/**
 * Gets mock schedule data
 * @returns Mock league schedule data based on cookie preference
 */
function getMockSchedule(): ILeagueSchedule {
  const mockFilePreference = getMockFilePreference();
  const mockData = mockFilePreference === "future" ? mockDataFuture : mockDataPast;
  console.log(`[API] Using ${mockFilePreference} mock data`);
  return mockData.leagueSchedule as ILeagueSchedule;
}

/**
 * Fetches the WNBA schedule for a given season and region
 * In development, respects the data source cookie to return mock or real data
 * @param season - The season year (e.g., "2025")
 * @param regionId - The region ID (default: 1)
 * @returns The league schedule data
 * @throws Error if the fetch fails
 */
export async function fetchWNBASchedule(
  season: string,
  regionId: number = 1,
): Promise<ILeagueSchedule> {
  // Check if we should use mock data (development only)
  if (process.env.NODE_ENV === "development") {
    const dataSource = getDataSource();
    if (dataSource === "mock") {
      return getMockSchedule();
    }
  }

  // Fetch from real API
  try {
    console.log("[API] Fetching from real WNBA API");
    const url = `${WNBA_API_BASE}/schedule?season=${season}&regionId=${regionId}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch WNBA schedule: ${response.status} ${response.statusText}`,
      );
    }

    const data: ScheduleResponse = await response.json();
    return data.leagueSchedule;
  } catch (error) {
    console.error("Error fetching WNBA schedule:", error);
    throw error;
  }
}
