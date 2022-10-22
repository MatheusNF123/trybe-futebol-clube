import SequelizeTeamsRepository from
  '../../../repositories/implementations/SequelizeTeams.repository';
import FindAllTeamsController from './findAllTeams.controller';
import FindAllTeamsService from './findAllTeams.service';

const teamsRepository = new SequelizeTeamsRepository();
const findAllTeamsService = new FindAllTeamsService(teamsRepository);
const findAllTeamsController = new FindAllTeamsController(findAllTeamsService);

export default findAllTeamsController;
