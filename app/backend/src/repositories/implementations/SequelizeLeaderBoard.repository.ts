import ILeaderBoard from '../../entities/ILeaderBoard';
import ILeaderBoardRepository from '../ILeaderBoard.repository';
import sequelize from '../../database/models';
import queryHome, { queryAway } from '../../utils/querySequelize';

export default class SequelizeLeaderBoardRepository implements ILeaderBoardRepository {
  private _sequelize = sequelize;

  async findAllHome(): Promise<ILeaderBoard[]> {
    const [leaderBoardHome] = await this._sequelize.query(queryHome);

    return leaderBoardHome as ILeaderBoard[];
  }

  async findAllAway(): Promise<ILeaderBoard[]> {
    const [leaderBoardAway] = await this._sequelize.query(queryAway);

    return leaderBoardAway as ILeaderBoard[];
  }
}
