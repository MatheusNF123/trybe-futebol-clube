import SequelizeLeaderBoardRepository from
  '../../../repositories/implementations/SequelizeLeaderBoard.repository';
import FindAllLeaderBoardController from './findAllLeaderBoard.controller';
import FindAllLeaderBoardService from './findAllLeaderBoard.service';

const sequelizeLeaderBoardRepository = new SequelizeLeaderBoardRepository();
const findAllLeaderBoardService = new FindAllLeaderBoardService(sequelizeLeaderBoardRepository);
const findAllLeaderBoardController = new FindAllLeaderBoardController(findAllLeaderBoardService);

export default findAllLeaderBoardController;
