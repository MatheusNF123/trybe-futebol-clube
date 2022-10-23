import { Router } from 'express';

import findClassificationHome from
  '../useCases/LeaderBoardCase/findAllClassificationHome';

const leaderBoardRouter = Router();

leaderBoardRouter.get('/leaderboard/home', findClassificationHome.findAllClassificationHome);

export default leaderBoardRouter;
