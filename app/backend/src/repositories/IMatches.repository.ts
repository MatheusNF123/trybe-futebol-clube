import IMatches from '../entities/IMatche';

export default interface IMatchesRepository {
  findAll(): Promise<IMatches[]>;
  findQuery(query: boolean | undefined): Promise<IMatches[]>;
}
