import ILeaderBoard from '../entities/ILeaderBoard';

export default interface ILeaderBoardRepository {
  findAllHome(): Promise<ILeaderBoard[]>
  findAllAway(): Promise<ILeaderBoard[]>
}
