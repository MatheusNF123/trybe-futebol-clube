// import * as bcrypt from 'bcryptjs';
import * as bcrypt from 'bcryptjs';
import CustomError from '../../../Error/customError';
import { IUserLogin } from '../../../entities/IUser';
import IUsersRepository from '../../../repositories/implementations/SequelizeUsers.repository';
import Token from '../../../helpers/GenerateToken';

export default class MakeLoginService {
  private _usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this._usersRepository = usersRepository;
  }

  public login = async ({ email, password }: IUserLogin) => {
    const user = await this._usersRepository.findByEmail({ email });
    if (!user) throw new CustomError('Incorrect email or password', 401);

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) throw new CustomError('Incorrect email or password', 401);

    const token = Token.generateToken({ email, role: user.role });

    return token;
  };
}
