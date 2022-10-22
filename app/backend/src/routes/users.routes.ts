import { Router } from 'express';
import makeLoginController from '../useCases/userUseCase/makeLogin';

const usersRouter = Router();

usersRouter.post('/login', makeLoginController.login);

export default usersRouter;
