import IMatches, { IMatchesTeam } from '../../entities/IMatche';
import MatchesModel from '../../database/models/Matches';
import IMatchesRepository from '../IMatches.repository';
import Teams from '../../database/models/Teams';

export default class SequelizeMatchesRepository implements IMatchesRepository {
  private model = MatchesModel;

  async findAll():Promise<IMatches[]> {
    const matches = await this.model.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    return matches;
  }

  async findQuery(query: boolean | undefined): Promise<IMatches[]> {
    const matches = await this.model.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
      where: { inProgress: query },
    });
    return matches;
  }

  async create(value: IMatchesTeam): Promise<IMatches> {
    const matche = await this.model.create(value);

    return matche;
  }

  async update(id: number): Promise<void> {
    await this.model.update({ inProgress: false }, { where: { id } });
  }
}
