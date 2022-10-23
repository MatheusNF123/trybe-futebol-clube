import SequelizeLeaderBoardRepository from
  '../../../repositories/implementations/SequelizeLeaderBoard.repository';

export default class FindAllClassificationHomeService {
  private _leaderBoardRepository: SequelizeLeaderBoardRepository;

  constructor(leaderBoardRepository: SequelizeLeaderBoardRepository) {
    this._leaderBoardRepository = leaderBoardRepository;
  }

  async findAllLeaderBoardHome() {
    const leaderBoard = await this._leaderBoardRepository.findAll();

    return leaderBoard;
  }
}
