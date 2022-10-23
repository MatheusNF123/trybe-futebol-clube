import ILeaderBoard from '../../entities/ILeaderBoard';
import ILeaderBoardRepository from '../ILeaderBoard.repository';
import sequelize from '../../database/models';
import query from '../../utils/querySequelize';

export default class SequelizeLeaderBoardRepository implements ILeaderBoardRepository {
  private _sequelize = sequelize;

  async findAll(): Promise<ILeaderBoard[]> {
    const [leaderBoard] = await this._sequelize.query(query);

    return leaderBoard as ILeaderBoard[];
  }
}
