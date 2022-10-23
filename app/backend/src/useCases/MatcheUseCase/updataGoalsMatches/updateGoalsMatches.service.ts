import { ImatchesGoalsMatches } from '../../../entities/IMatche';
import SequelizeMatchesRepository from
  '../../../repositories/implementations/SequelizeMatches.repository';

export default class UpdateGoalsMatchesService {
  private _matchesRepository: SequelizeMatchesRepository;

  constructor(matchesRepository: SequelizeMatchesRepository) {
    this._matchesRepository = matchesRepository;
  }

  async updateGoals({ homeTeamGoals, awayTeamGoals, id }:ImatchesGoalsMatches): Promise<void> {
    await this._matchesRepository.updateGoals({ awayTeamGoals, homeTeamGoals, id });
  }
}
