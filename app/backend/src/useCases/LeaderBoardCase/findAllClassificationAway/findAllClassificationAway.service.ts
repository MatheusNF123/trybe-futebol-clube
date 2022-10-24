import ILeaderBoardRepository from '../../../repositories/ILeaderBoard.repository';

export default class FindAllClassificationAwayService {
  private _leaderBoardRepository: ILeaderBoardRepository;

  constructor(leaderBoardRepository: ILeaderBoardRepository) {
    this._leaderBoardRepository = leaderBoardRepository;
  }

  async findLeaderBoardAway() {
    const boardAwayTeam = await this._leaderBoardRepository.findAllAway();

    return boardAwayTeam;
  }
}
