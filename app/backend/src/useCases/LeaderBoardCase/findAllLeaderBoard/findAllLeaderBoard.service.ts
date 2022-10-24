import SequelizeLeaderBoardRepository from
  '../../../repositories/implementations/SequelizeLeaderBoard.repository';

export default class FindAllLeaderBoardService {
  private _leaderBoardRepository: SequelizeLeaderBoardRepository;

  constructor(leaderBoardRepository: SequelizeLeaderBoardRepository) {
    this._leaderBoardRepository = leaderBoardRepository;
  }

  async findLeaderBoard() {
    const boardAwayTeam = await this._leaderBoardRepository.findAll();

    return boardAwayTeam;
  }
}
