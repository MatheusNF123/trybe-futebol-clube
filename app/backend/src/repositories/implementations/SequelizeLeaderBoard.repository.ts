import ILeaderBoard from '../../entities/ILeaderBoard';
import ILeaderBoardRepository from '../ILeaderBoard.repository';
import sequelize from '../../database/models';
import queryHome, { queryAway, SumHomeAway } from '../../utils/querySequelize';

export default class SequelizeLeaderBoardRepository implements ILeaderBoardRepository {
  private _sequelize = sequelize;

  async findAllHome(): Promise<ILeaderBoard[]> {
    const [,leaderBoardHome] = await this._sequelize.query(queryHome);

    return leaderBoardHome as ILeaderBoard[];
  }

  async findAllAway(): Promise<ILeaderBoard[]> {
    const [,leaderBoardAway] = await this._sequelize.query(queryAway);

    return leaderBoardAway as ILeaderBoard[];
  }

  async findAll() : Promise<ILeaderBoard[]> {
    const [,allLeaderBoard] = await this._sequelize.query(SumHomeAway);

    return allLeaderBoard as ILeaderBoard[];
  }

  // static objectFabric = (home: ILeaderBoard, away: ILeaderBoard) => {
  //   const totalPoints = +home.totalPoints + +away.totalPoints;
  //   const totalGames = +home.totalGames + +away.totalGames;
  //   const newObject = {
  //     name: home.name,
  //     totalPoints: +home.totalPoints + +away.totalPoints,
  //     totalGames: +home.totalGames + +away.totalGames,
  //     totalVictories: +home.totalVictories + +away.totalVictories,
  //     totalDraws: +home.totalDraws + +away.totalDraws,
  //     totalLosses: +home.totalLosses + +away.totalLosses,
  //     goalsFavor: +home.goalsFavor + +away.goalsFavor,
  //     goalsOwn: +home.goalsOwn + +away.goalsOwn,
  //     goalsBalance: +home.goalsBalance + +away.goalsBalance,
  //     efficiency: ((totalPoints / (totalGames * 3)) * 100).toFixed(2),
  //   };
  //   return newObject;
  // };
}
