export type ILeagueSchedule = {
  seasonYear: string;
  leagueId: string;
  gameDates: IGameDate[];
};

export type IGameDate = {
  gameDate: string;
  games: IGameItem[];
};

export type IGameItem = {
  gameId: string;
  seasonType: string;
  gameStatus: number;
  gameStatusText: string;
  gameSequence: number;
  gameDateEst: string;
  gameTimeEst: string;
  gameDateTimeEst: string;
  gameDateUTC: string;
  gameTimeUTC: string;
  gameDateTimeUTC: string;
  awayTeamTime: string;
  homeTeamTime: string;
  day: string;
  monthNum: number;
  weekNumber: number;
  weekName: string;
  ifNecessary: boolean;
  seriesGameNumber: string;
  gameLabel: string;
  gameSubLabel: string;
  seriesText: string;
  arenaName: string;
  arenaState: string;
  arenaCity: string;
  postponedStatus: string;
  branchLink: string;
  actualStartTimeUTC: string;
  actualEndTimeUTC: string;
  gameDurationSeconds: number;
  seriesConference: string;
  gameSubtype: string;
  isNeutral: boolean;
  broadcasters: IBroadcasters[];
  homeTeam: ITeamInfo;
  awayTeam: ITeamInfo;
  pointsLeaders: IPointsLeader[];
}

export type IBroadcasters = {
  nationalBroadcasters: IBroadcaster[],
  nationalRadioBroadcasters: IBroadcaster[],
  nationalOttBroadcasters: IBroadcaster[],
  homeTvBroadcasters: IBroadcaster[],
  homeRadioBroadcasters: IBroadcaster[],
  homeOttBroadcasters: IBroadcaster[],
  awayTvBroadcasters: IBroadcaster[],
  awayRadioBroadcasters: IBroadcaster[],
  awayOttBroadcasters: IBroadcaster[],
  intlTvBroadcasters: IBroadcaster[],
  intlRadioBroadcasters: IBroadcaster[],
  intlOttBroadcasters: IBroadcaster[],
};


export type IBroadcaster = {
  broadcasterScope: string;
  broadcasterMedia: string;
  broadcasterId: number;
  broadcasterDisplay: string;
  broadcasterAbbreviation: string;
  broadcasterDescription: string;
  tapeDelayComments: string;
  broadcasterVideoLink: string;
  broadcasterTeamId: number;
  broadcasterRanking: number;
}

export type ITeamInfo = {
  teamId: number;
  teamName: string;
  teamCity: string;
  teamTricode: string;
  teamSlug: string;
  wins: number;
  losses: number;
  score: number;
  seed: number;
  groupWins: number;
  groupLosses: number;
}

export type IPointsLeader = {
  personId: number;
  firstName: string;
  lastName: string;
  teamId: number;
  teamCity: string;
  teamName: string
  teamTricode: string;
  points: number;
}