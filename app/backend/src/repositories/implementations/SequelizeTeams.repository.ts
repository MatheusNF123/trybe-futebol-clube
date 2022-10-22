import { ITeams } from '../../entities/ITeams';
import TeamsModel from '../../database/models/Teams';
import ITeamsRepository from '../ITeam.repository';

export default class SequelizeTeamsRepository implements ITeamsRepository {
  private model = TeamsModel;

  async findAll(): Promise<ITeams[]> {
    const teams = await this.model.findAll();

    return teams;
  }
}
