import ILeaderBoard from '../entities/ILeaderBoard';

export default interface ILeaderBoardRepository {
  findAll(): Promise<ILeaderBoard[]>
}
