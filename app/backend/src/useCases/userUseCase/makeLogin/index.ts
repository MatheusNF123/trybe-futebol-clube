import MakeLoginController from './makeLogin.controller';
import MakeLoginService from './makeLogin.service';
import SequelizeUserRepository from
  '../../../repositories/implementations/SequelizeUsers.repository';

const usersRepository = new SequelizeUserRepository();
const makeLoginService = new MakeLoginService(usersRepository);
const makeLoginController = new MakeLoginController(makeLoginService);

export default makeLoginController;
