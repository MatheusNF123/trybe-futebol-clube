// import * as bcrypt from 'bcryptjs';

import CustomError from '../../../Error/customError';
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

    if (!user) throw new CustomError('User not found', 401);
    return user.role;
  };
}
