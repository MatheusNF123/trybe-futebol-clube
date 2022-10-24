import ILeaderBoardRepository from '../../../repositories/ILeaderBoard.repository';

export default class FindAllClassificationHomeService {
  private _leaderBoardRepository: ILeaderBoardRepository;

  constructor(leaderBoardRepository: ILeaderBoardRepository) {
    this._leaderBoardRepository = leaderBoardRepository;
  }

  async findAllLeaderBoardHome() {
    const leaderBoard = await this._leaderBoardRepository.findAllHome();

    return leaderBoard;
  }
}
