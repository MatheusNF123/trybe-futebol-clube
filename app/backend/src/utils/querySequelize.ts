const queryHome = `SELECT 
te.team_name as name,
  SUM(
  case
WHEN home_team_goals > away_team_goals then 3
        WHEN home_team_goals = away_team_goals then 1
        else 0
    end ) as totalPoints,
    count( ma.home_team ) as totalGames,
    count(
    case
    when home_team_goals > away_team_goals then 1
end) as totalVictories,
count(
    case
    when home_team_goals = away_team_goals then 1
    end) as totalDraws,
count(
    case
    when home_team_goals < away_team_goals then 1
     end) as totalLosses,
     SUM( ma.home_team_goals) as goalsFavor,
     SUM( ma.away_team_goals) as goalsOwn,
     SUM( ma.home_team_goals - ma.away_team_goals ) as goalsBalance,
   format (((SUM(
  case
WHEN home_team_goals > away_team_goals then 3
        WHEN home_team_goals = away_team_goals then 1
        else 0
    end ) / (count( ma.home_team ) * 3)) * 100),2) as efficiency
    from TRYBE_FUTEBOL_CLUBE.teams as te
    join TRYBE_FUTEBOL_CLUBE.matches as ma on te.id = ma.home_team
    where ma.in_progress != 1
    GROUP BY te.team_name
    ORDER BY totalPoints desc, goalsBalance desc ,goalsFavor desc, goalsOwn desc`;

export default queryHome;

const queryAway = `SELECT 
te.team_name as name,
  SUM(
  case
WHEN away_team_goals > home_team_goals then 3
        WHEN away_team_goals = home_team_goals then 1
        else 0
    end ) as totalPoints,
    count( ma.away_team ) as totalGames,
    count(
    case
    when away_team_goals > home_team_goals then 1
end) as totalVictories,
count(
    case
    when away_team_goals = home_team_goals then 1
    end) as totalDraws,
count(
    case
    when away_team_goals < home_team_goals then 1
     end) as totalLosses,
     SUM( ma.away_team_goals) as goalsFavor,
     SUM( ma.home_team_goals) as goalsOwn,
     SUM( ma.away_team_goals - ma.home_team_goals ) as goalsBalance,
   format (((SUM(
  case
WHEN away_team_goals > home_team_goals then 3
        WHEN away_team_goals = home_team_goals then 1
        else 0
    end ) / (count( ma.away_team ) * 3)) * 100),2) as efficiency
    from TRYBE_FUTEBOL_CLUBE.teams as te
    join TRYBE_FUTEBOL_CLUBE.matches as ma on te.id = ma.away_team
    where ma.in_progress != 1
    GROUP BY te.team_name
    ORDER BY totalPoints desc, goalsBalance desc ,goalsFavor desc, goalsOwn desc`;

export { queryAway };
