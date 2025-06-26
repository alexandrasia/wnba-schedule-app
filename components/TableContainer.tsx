import React, { useState } from "react";
import { Button, Flex, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGameSchedule } from "../contexts/GameScheduleContext";
import { IBroadcaster } from "../types/LeagueSchedule";
import { useSelectedGames } from "../contexts/SelectedGamesContext";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface GameEvent {
  key: React.Key;
  date: string;
  time: string;
  homeTeamName: string;
  awayTeamName: string;
  notes: string;
  broadCast: string;
}

const columns: TableColumnsType<GameEvent> = [
  { title: "Date", dataIndex: "date" },
  { title: "Time", dataIndex: "time" },
  { title: "Home Team", dataIndex: "homeTeamName" },
  { title: "Away Team", dataIndex: "awayTeamName" },
  { title: "Notes", dataIndex: "notes" },
  { title: "Broadcast", dataIndex: "broadCast" },
];

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
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedGamesKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedGamesKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<GameEvent> = {
    selectedRowKeys: selectedGamesKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedGamesKeys.length > 0;

  return (
    <div className="flex-2 min-w-0">
      <Flex gap="middle" vertical>
        <Flex align="center" gap="middle">
          <Button
            type="primary"
            onClick={start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          {hasSelected
            ? `Selected game IDs: ${selectedGamesKeys.join(", ")}`
            : null}
        </Flex>
        <Table<GameEvent>
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
        />
      </Flex>
    </div>
  );
};

export default TableContainer;
