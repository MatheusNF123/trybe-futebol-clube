// import ITeamsName from './ITeams';

export interface IMatchesTeam {
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export default interface IMatches extends IMatchesTeam {
  id: number;
  inProgress: boolean;

}

// teamHome: ITeamsName;
// teamAway: ITeamsName;
