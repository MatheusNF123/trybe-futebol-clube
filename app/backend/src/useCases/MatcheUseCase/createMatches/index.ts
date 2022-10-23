import CreateMatchController from './createMatch.controller';
import CreateMatcheService from './createMatche.service';
import SequelizeMatchesRepository from
  '../../../repositories/implementations/SequelizeMatches.repository';

const sequelizeMatchesRepository = new SequelizeMatchesRepository();
const createMatcheService = new CreateMatcheService(sequelizeMatchesRepository);
const createMatchController = new CreateMatchController(createMatcheService);

export default createMatchController;
