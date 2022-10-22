import SequelizeTeamsRepository from
  '../../../repositories/implementations/SequelizeTeams.repository';
import FindOneTeamController from './findOneTeam.controller';
import FindOneTeamService from './findOneTeam.service';

const teamsRepository = new SequelizeTeamsRepository();
const findOneTeamService = new FindOneTeamService(teamsRepository);
const findOneTeamController = new FindOneTeamController(findOneTeamService);

export default findOneTeamController;
