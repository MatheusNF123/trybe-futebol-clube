import SequelizeLeaderBoardRepository from
  '../../../repositories/implementations/SequelizeLeaderBoard.repository';

export default class FindAllClassificationAwayService {
  private _leaderBoardRepository: SequelizeLeaderBoardRepository;

  constructor(leaderBoardRepository: SequelizeLeaderBoardRepository) {
    this._leaderBoardRepository = leaderBoardRepository;
  }

  async findLeaderBoardAway() {
    const boardAwayTeam = await this._leaderBoardRepository.findAllAway();

    return boardAwayTeam;
  }
}
