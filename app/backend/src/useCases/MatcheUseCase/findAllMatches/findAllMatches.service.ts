import SequelizeMatchesRepository from
  '../../../repositories/implementations/SequelizeMatches.repository';

export default class FindAllMatchesService {
  private _matchesRepository: SequelizeMatchesRepository;

  constructor(matchesRepository: SequelizeMatchesRepository) {
    this._matchesRepository = matchesRepository;
  }

  async findAllMatches() {
    const matches = await this._matchesRepository.findAll();
    return matches;
  }
}
