import { Application } from 'express';
import 'express-async-errors';

import usersRouter from './users.routes';
import teamsRouter from './teams.routes';
import matchesRouter from './matches.routes';
import leaderBoardRouter from './leaderBoar.routes';

export default (app: Application) => {
  app.use(usersRouter);
  app.use(teamsRouter);
  app.use(matchesRouter);
  app.use(leaderBoardRouter);
};
