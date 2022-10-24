import IMatchesRepository from '../../../repositories/IMatches.repository';

export default class FindAllMatchesService {
  private _matchesRepository: IMatchesRepository;

  constructor(matchesRepository: IMatchesRepository) {
    this._matchesRepository = matchesRepository;
  }

  async findAllMatches() {
    const matches = await this._matchesRepository.findAll();
    return matches;
  }
}
