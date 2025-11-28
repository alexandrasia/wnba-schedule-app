import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { useGameSchedule } from "@/contexts/GameScheduleContext";
import { IBroadcaster } from "@/types/LeagueSchedule";
import { useSelectedGames } from "@/contexts/SelectedGamesContext";

interface GameEvent {
  key: React.Key;
  date: string;
  time: string;
  homeTeamName: string;
  awayTeamName: string;
  notes: string;
  broadCast: string;
}

const formatGameItems = (gameDates: any[]): GameEvent[] => {
  return gameDates.flatMap((gameDate) =>
    gameDate.games.map((gameItem: any) => ({
      key: gameItem.gameId,
      date: gameItem.gameDateUTC,
      time: gameItem.gameDateTimeUTC,
      homeTeamName: gameItem.homeTeam?.teamName,
      awayTeamName: gameItem.awayTeam?.teamName,
      notes: gameItem.seasonType,
      broadCast: gameItem.broadcasters?.nationalBroadcasters
        ?.map((broadcaster: IBroadcaster) => broadcaster.broadcasterDisplay)
        .join(", "),
    })),
  );
};

const TableContainer = () => {
  const { selectedGamesKeys, setSelectedGamesKeys } = useSelectedGames();
  const [loading, setLoading] = useState(false);
  const { gameItems } = useGameSchedule();
  const dataSource = formatGameItems(gameItems);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedGamesKeys([]);
      setLoading(false);
    }, 1000);
  };

  const toggleGameSelection = (gameKey: React.Key) => {
    setSelectedGamesKeys((prev) =>
      prev.includes(gameKey)
        ? prev.filter((key) => key !== gameKey)
        : [...prev, gameKey],
    );
  };

  const isGameSelected = (gameKey: React.Key) =>
    selectedGamesKeys.includes(gameKey);

  const hasSelected = selectedGamesKeys.length > 0;

  return (
    <div className="flex-2 min-w-0">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Button onClick={start} disabled={!hasSelected || loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Reload"
            )}
          </Button>
          {hasSelected && (
            <span className="text-sm text-muted-foreground">
              Selected game IDs: {selectedGamesKeys.join(", ")}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataSource.map((game) => {
            const selected = isGameSelected(game.key);
            return (
              <Card
                key={game.key}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selected
                    ? "border-primary ring-2 ring-primary ring-offset-2"
                    : ""
                }`}
                onClick={() => toggleGameSelection(game.key)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base">
                      {game.awayTeamName} @ {game.homeTeamName}
                    </CardTitle>
                    <Checkbox
                      checked={selected}
                      onCheckedChange={() => toggleGameSelection(game.key)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">Date:</span> {game.date}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Time:</span> {game.time}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">{game.notes}</Badge>
                    {game.broadCast && (
                      <Badge variant="outline">{game.broadCast}</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
