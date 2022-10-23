import FindAllMatchesController from './findAllMatches.controller';
import FindAllMatchesService from './findAllMatches.service';
import SequelizeMatchesRepository from
  '../../../repositories/implementations/SequelizeMatches.repository';

const matchRepository = new SequelizeMatchesRepository();
const findallMatchesService = new FindAllMatchesService(matchRepository);

const findAllMatchesController = new FindAllMatchesController(findallMatchesService);

export default findAllMatchesController;
