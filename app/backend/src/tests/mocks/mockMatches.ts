const mockAllTeam = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: false,
  },
  {
    id: 3,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: false,
  },
  {
    id: 4,
    homeTeam: 3,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: false,
  },
]

export default mockAllTeam

const mockTeamsInProgressTrue = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: true,
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: true,
  },
  {
    id: 3,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: true,
  },
  {
    id: 4,
    homeTeam: 3,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: true,
  },
]

const mockInsertMatches = {
  homeTeam: 16,
  awayTeam: 8, 
  homeTeamGoals: 2,
  awayTeamGoals: 2,
}

const mockResultInsertMatches = {
  id: 1,
  ...mockInsertMatches,
  inProgress: true

}

const mockErrorPostMatches = {
  homeTeam: 16,
  awayTeam: 16, 
}

const mockGoalsMatches = {
  homeTeamGoals: 3,
  awayTeamGoals: 1
}


const mockTeamHomeErrorTeam = {
  homeTeam: 9999,
  awayTeam: 8, 
  homeTeamGoals: 2,
  awayTeamGoals: 2,
}
const mockTeamAwayErrorTeam = {
  homeTeam: 9999,
  awayTeam: 8, 
  homeTeamGoals: 2,
  awayTeamGoals: 2,
}

export { mockTeamsInProgressTrue,
  mockInsertMatches,
  mockResultInsertMatches,
  mockErrorPostMatches,
  mockGoalsMatches,
  mockTeamHomeErrorTeam,
  mockTeamAwayErrorTeam
}