// import * as bcrypt from 'bcryptjs';

import { IUserEmail } from '../../../entities/IUser';
import IUsersRepository from '../../../repositories/implementations/SequelizeUsers.repository';

// import Token from '../../../helpers/GenerateToken';

export default class AuthLoginService {
  private _usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this._usersRepository = usersRepository;
  }

  public loginValidade = async ({ email }: IUserEmail) => {
    const user = await this._usersRepository.findByEmail({ email });

    return user?.role;
  };
}
