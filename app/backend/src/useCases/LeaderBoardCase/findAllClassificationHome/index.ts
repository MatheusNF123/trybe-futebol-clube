import SequelizeLeaderBoardRepository from
  '../../../repositories/implementations/SequelizeLeaderBoard.repository';
import FindAllClassificationHomeController from './findAllClassificationHome.controller';
import FindAllClassificationHomeService from './findAllClassificationHome.service';

const sequelizeLeaderBoardRepository = new SequelizeLeaderBoardRepository();
const findAllClassificationHomeService = new
FindAllClassificationHomeService(sequelizeLeaderBoardRepository);
const findAllClassificationHomeController = new
FindAllClassificationHomeController(findAllClassificationHomeService);

export default findAllClassificationHomeController;
