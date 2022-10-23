import CustomError from '../../../Error/customError';
import { IMatchesTeam } from '../../../entities/IMatche';
import SequelizeMatchesRepository from
  '../../../repositories/implementations/SequelizeMatches.repository';
import Teams from '../../../database/models/Teams';

export default class CreateMatcheService {
  private _matcheRepository: SequelizeMatchesRepository;

  constructor(matcheRepository: SequelizeMatchesRepository) {
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
