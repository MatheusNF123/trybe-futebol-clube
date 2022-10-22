import { Application } from 'express';
import 'express-async-errors';

import usersRouter from './users.routes';

export default (app: Application) => {
  app.use(usersRouter);
};
