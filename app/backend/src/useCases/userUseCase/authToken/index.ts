import AuthLoginController from './authLogin.controller';
import AuthLoginService from './authLogin.service';
import SequelizeUserRepository from
  '../../../repositories/implementations/SequelizeUsers.repository';

const usersRepository = new SequelizeUserRepository();
const authLoginService = new AuthLoginService(usersRepository);
const authLoginController = new AuthLoginController(authLoginService);

export default authLoginController;
