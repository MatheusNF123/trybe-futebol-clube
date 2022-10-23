import SequelizeMatchesRepository
  from '../../../repositories/implementations/SequelizeMatches.repository';
import UpdateGoalsMatchesController from './updateGoalsMatches.controller';
import UpdateGoalsMatchesService from './updateGoalsMatches.service';

const matchesRepository = new SequelizeMatchesRepository();
const updateGoalsMatchesService = new UpdateGoalsMatchesService(matchesRepository);
const updateGoalsMatchesController = new UpdateGoalsMatchesController(updateGoalsMatchesService);

export default updateGoalsMatchesController;
