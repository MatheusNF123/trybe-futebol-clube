import SequelizeMatchesRepository from
  '../../../repositories/implementations/SequelizeMatches.repository';

import FindInProgressController from './findInProgress.controller';
import FindInProgressService from './findInProgress.service';

const matchRepository = new SequelizeMatchesRepository();
const findInProgressService = new FindInProgressService(matchRepository);
const findInProgressController = new FindInProgressController(findInProgressService);

export default findInProgressController;
