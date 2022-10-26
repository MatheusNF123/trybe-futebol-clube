import IMatchesRepository from '../../../repositories/IMatches.repository';

export default class FindInProgressService {
  private _matcheRepository: IMatchesRepository;

  constructor(matcheRpository: IMatchesRepository) {
    this._matcheRepository = matcheRpository;
  }

  async findInProgress(query: string) {
    const matches = await this._matcheRepository.findQuery(query === 'true');

    return matches;
  }
}
