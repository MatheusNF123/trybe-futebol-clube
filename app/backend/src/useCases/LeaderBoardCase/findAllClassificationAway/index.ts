import SequelizeLeaderBoardRepository from
  '../../../repositories/implementations/SequelizeLeaderBoard.repository';
import FindAllClassificationAwayController from './findAllClassificationAway.controller';
import FindAllClassificationAwayService from './findAllClassificationAway.service';

const sequelizeBoardRepository = new SequelizeLeaderBoardRepository();
const findAwayService = new FindAllClassificationAwayService(sequelizeBoardRepository);
const findAwayController = new FindAllClassificationAwayController(findAwayService);

export default findAwayController;
