import { Router } from 'express';
import Token from '../helpers/GenerateToken';
import loginValidator from '../middlewares/loginValidator';
import makeLoginController from '../useCases/userUseCase/makeLogin';
import authLoginController from '../useCases/userUseCase/authToken';

const usersRouter = Router();

usersRouter.post('/login', loginValidator, makeLoginController.login);
usersRouter.get('/login/validate', Token.authToken, authLoginController.loginValidade);

export default usersRouter;
