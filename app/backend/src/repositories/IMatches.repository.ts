import IMatches, { IMatchesTeam } from '../entities/IMatche';

export default interface IMatchesRepository {
  findAll(): Promise<IMatches[]>;
  findQuery(query: boolean | undefined): Promise<IMatches[]>;
  create(value: IMatchesTeam): Promise<IMatches>;
}
