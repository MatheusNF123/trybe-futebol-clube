import { Router } from 'express';

import findClassificationHome from
  '../useCases/LeaderBoardCase/findAllClassificationHome';
import findAwayController from '../useCases/LeaderBoardCase/findAllClassificationAway';

const leaderBoardRouter = Router();

leaderBoardRouter.get('/leaderboard/home', findClassificationHome.findAllClassificationHome);
leaderBoardRouter.get('/leaderboard/away', findAwayController.findLeaderBoardAway);

export default leaderBoardRouter;
