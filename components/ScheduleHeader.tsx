"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import { useSelectedGames } from "@/contexts/SelectedGamesContext";
import { useGameSchedule } from "@/contexts/GameScheduleContext";

export default function ScheduleHeader() {
  const { selectedGamesKeys, setSelectedGamesKeys } = useSelectedGames();
  const { gameItems } = useGameSchedule();

  // Get all game IDs from current visible games
  const allGameIds = gameItems.flatMap((gameDate) =>
    gameDate.games.map((game) => game.gameId),
  );

  const selectedCount = selectedGamesKeys.length;
  const totalGames = allGameIds.length;
  const hasSelections = selectedCount > 0;
  const allSelected = selectedCount === totalGames && totalGames > 0;

  const handleToggleSelectAll = () => {
    if (allSelected) {
      // Deselect all
      setSelectedGamesKeys([]);
    } else {
      // Select all
      setSelectedGamesKeys(allGameIds);
    }
  };

  const handleExportICS = () => {
    // Phase 1: Placeholder implementation
    console.log("Export ICS clicked. Selected games:", selectedGamesKeys);
    console.log("Number of games:", selectedGamesKeys.length);

    // Phase 2 (later): Generate and download .ics file
    // const icsContent = generateICS(selectedGamesKeys);
    // downloadFile(icsContent, 'games.ics');
  };

  return (
    <div className="flex justify-between items-center w-full px-8 py-4">
      <div>
        <h1 className="text-3xl font-bold">Sports Schedule</h1>
        <p className="text-sm text-muted-foreground">
          Select games to watch and export to your calendar
        </p>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={handleToggleSelectAll}>
          {allSelected ? "Deselect All" : "Select All"}
        </Button>

        <Button
          onClick={handleExportICS}
          disabled={!hasSelections}
          className="relative"
        >
          <Download className="mr-2 h-4 w-4" />
          Export ICS
          {hasSelections && (
            <Badge
              variant="secondary"
              className="ml-2 bg-background text-foreground"
            >
              {selectedCount}
            </Badge>
          )}
        </Button>
      </div>
    </div>
  );
}
