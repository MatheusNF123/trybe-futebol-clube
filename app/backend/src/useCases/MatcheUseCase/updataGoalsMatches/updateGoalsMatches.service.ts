import { ImatchesGoalsMatches } from '../../../entities/IMatche';
import IMatchesRepository from '../../../repositories/IMatches.repository';

export default class UpdateGoalsMatchesService {
  private _matchesRepository: IMatchesRepository;

  constructor(matchesRepository: IMatchesRepository) {
    this._matchesRepository = matchesRepository;
  }

  async updateGoals({ homeTeamGoals, awayTeamGoals, id }:ImatchesGoalsMatches): Promise<void> {
    await this._matchesRepository.updateGoals({ awayTeamGoals, homeTeamGoals, id });
  }
}
