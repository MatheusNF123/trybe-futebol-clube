import ITeamsRepository from '../../../repositories/ITeam.repository';

export default class FindAllTeamsService {
  private _teamsRepository: ITeamsRepository;

  constructor(teamsRepository: ITeamsRepository) {
    this._teamsRepository = teamsRepository;
  }

  public findAllTeams = async () => {
    const teams = await this._teamsRepository.findAll();

    return teams;
  };
}
