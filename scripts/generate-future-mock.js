const fs = require("fs");
const path = require("path");

// Read the existing mock file
const mockPath = path.join(__dirname, "..", "test", "wnba-schedule-example.json");
const data = JSON.parse(fs.readFileSync(mockPath, "utf8"));

// Calculate offset: from May 2025 to December 2025 (7 months = ~214 days)
const DAYS_OFFSET = 214;

function addDays(dateStr, days) {
  if (!dateStr || dateStr === "") return dateStr;

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;

  date.setDate(date.getDate() + days);
  return date.toISOString();
}

function transformGameDate(dateStr, days) {
  // Format: '05/02/2025 00:00:00'
  if (!dateStr || !dateStr.includes("/")) return dateStr;

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;

  date.setDate(date.getDate() + days);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year} 00:00:00`;
}

// Transform the data
const transformed = {
  ...data,
  meta: {
    ...data.meta,
    time: new Date().toISOString(),
  },
  leagueSchedule: {
    ...data.leagueSchedule,
    gameDates: data.leagueSchedule.gameDates.map((gameDate) => ({
      ...gameDate,
      gameDate: transformGameDate(gameDate.gameDate, DAYS_OFFSET),
      games: gameDate.games.map((game) => ({
        ...game,
        gameDateEst: addDays(game.gameDateEst, DAYS_OFFSET),
        gameTimeEst: game.gameTimeEst,
        gameDateTimeEst: addDays(game.gameDateTimeEst, DAYS_OFFSET),
        gameDateUTC: addDays(game.gameDateUTC, DAYS_OFFSET),
        gameTimeUTC: game.gameTimeUTC,
        gameDateTimeUTC: addDays(game.gameDateTimeUTC, DAYS_OFFSET),
        awayTeamTime: addDays(game.awayTeamTime, DAYS_OFFSET),
        homeTeamTime: addDays(game.homeTeamTime, DAYS_OFFSET),
        actualStartTimeUTC: addDays(game.actualStartTimeUTC, DAYS_OFFSET),
        actualEndTimeUTC: addDays(game.actualEndTimeUTC, DAYS_OFFSET),
      })),
    })),
  },
};

// Write to new file
const outputPath = path.join(
  __dirname,
  "..",
  "test",
  "wnba-schedule-future.json",
);
fs.writeFileSync(outputPath, JSON.stringify(transformed, null, 2));

console.log("✓ Generated test/wnba-schedule-future.json with future dates");
console.log(
  `  Original date range: ${data.leagueSchedule.gameDates[0]?.gameDate}`,
);
console.log(
  `  New date range: ${transformed.leagueSchedule.gameDates[0]?.gameDate}`,
);
