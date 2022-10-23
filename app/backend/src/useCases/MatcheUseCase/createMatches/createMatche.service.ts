import { IMatchesTeam } from '../../../entities/IMatche';
import SequelizeMatchesRepository from
  '../../../repositories/implementations/SequelizeMatches.repository';

export default class CreateMatcheService {
  private _matcheRepository: SequelizeMatchesRepository;

  constructor(matcheRepository: SequelizeMatchesRepository) {
    this._matcheRepository = matcheRepository;
  }

  async createMatches(infoMatches: IMatchesTeam) {
    const matche = await this._matcheRepository.create(infoMatches);
    return matche;
  }
}
