import { Router } from 'express';

import findClassificationHome from
  '../useCases/LeaderBoardCase/findAllClassificationHome';
import findAwayController from '../useCases/LeaderBoardCase/findAllClassificationAway';
import findAllController from '../useCases/LeaderBoardCase/findAllLeaderBoard';

const leaderBoardRouter = Router();

leaderBoardRouter.get('/leaderboard/home', findClassificationHome.findAllClassificationHome);
leaderBoardRouter.get('/leaderboard/away', findAwayController.findLeaderBoardAway);
leaderBoardRouter.get('/leaderboard', findAllController.findLeaderBoard);

export default leaderBoardRouter;
