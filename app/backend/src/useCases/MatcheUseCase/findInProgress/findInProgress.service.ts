import SequelizeMatchesRepository from
  '../../../repositories/implementations/SequelizeMatches.repository';

export default class FindInProgressService {
  private _matcheRepository: SequelizeMatchesRepository;

  constructor(matcheRpository: SequelizeMatchesRepository) {
    this._matcheRepository = matcheRpository;
  }

  async findInProgress(query: string | undefined) {
    const matches = await this._matcheRepository.findQuery(query === 'true');

    return matches;
  }
}
