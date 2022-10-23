import UpdateMatchesController from './updateMatches.controller';
import UpdateMatchesService from './updateMatches.service';
import SequelizeMatchesRepository from
  '../../../repositories/implementations/SequelizeMatches.repository';

const matchesRepository = new SequelizeMatchesRepository();
const updateMatchesService = new UpdateMatchesService(matchesRepository);
const updateMatchesController = new UpdateMatchesController(updateMatchesService);

export default updateMatchesController;
