import { ITeams } from '../entities/ITeams';

export default interface ITeamsRepository {
  findAll(): Promise<ITeams[]>
}
