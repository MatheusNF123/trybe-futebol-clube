import CustomError from '../../../Error/customError';
import { IMatchesTeam } from '../../../entities/IMatche';
import Teams from '../../../database/models/Teams';
import IMatchesRepository from '../../../repositories/IMatches.repository';

export default class CreateMatcheService {
  private _matcheRepository: IMatchesRepository;

  constructor(matcheRepository: IMatchesRepository) {
    this._matcheRepository = matcheRepository;
  }

  async createMatches(infoMatches: IMatchesTeam) {
    const { homeTeam, awayTeam } = infoMatches;
    if (homeTeam === awayTeam) {
      throw new CustomError('It is not possible to create a match with two equal teams', 422);
    }
    const teams = await Teams.findAll({ raw: true });
    const homeTeamExist = teams.some((team) => team.id === homeTeam);
    const awayTeamExist = teams.some((team) => team.id === homeTeam);
    if (!homeTeamExist || !awayTeamExist) {
      throw new CustomError('There is no team with such id!', 404);
    }
    const matche = await this._matcheRepository.create(infoMatches);
    return matche;
  }
}
