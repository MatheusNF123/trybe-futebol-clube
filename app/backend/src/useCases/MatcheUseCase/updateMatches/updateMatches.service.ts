import IMatchesRepository from '../../../repositories/IMatches.repository';

export default class UpdateMatchesService {
  private _matchesRepository: IMatchesRepository;

  constructor(matchesRepository: IMatchesRepository) {
    this._matchesRepository = matchesRepository;
  }

  async update(id: number) {
    await this._matchesRepository.update(id);
  }
}
