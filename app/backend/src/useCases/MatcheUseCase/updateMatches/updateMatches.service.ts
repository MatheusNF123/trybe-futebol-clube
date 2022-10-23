import SequelizeMatchesRepository from
  '../../../repositories/implementations/SequelizeMatches.repository';

export default class UpdateMatchesService {
  private _matchesRepository: SequelizeMatchesRepository;

  constructor(matchesRepository: SequelizeMatchesRepository) {
    this._matchesRepository = matchesRepository;
  }

  async update(id: number) {
    await this._matchesRepository.update(id);
  }
}
