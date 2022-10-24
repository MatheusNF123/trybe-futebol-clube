import ILeaderBoardRepository from '../../../repositories/ILeaderBoard.repository';

export default class FindAllLeaderBoardService {
  private _leaderBoardRepository: ILeaderBoardRepository;

  constructor(leaderBoardRepository: ILeaderBoardRepository) {
    this._leaderBoardRepository = leaderBoardRepository;
  }

  async findLeaderBoard() {
    const boardAwayTeam = await this._leaderBoardRepository.findAll();

    return boardAwayTeam;
  }
}
