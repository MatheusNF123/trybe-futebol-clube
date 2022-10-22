import CustomError from '../../../Error/customError';
import ITeamsRepository from '../../../repositories/ITeam.repository';

export default class FindOneTeamService {
  private _teamsRepository: ITeamsRepository;

  constructor(teamsRepository: ITeamsRepository) {
    this._teamsRepository = teamsRepository;
  }

  findOneTeam = async (id:number) => {
    const team = await this._teamsRepository.findOne(id);

    if (!team) throw new CustomError('nao existe time com esse id', 401);

    return team;
  };
}
