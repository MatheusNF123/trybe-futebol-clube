import IUser, { IUserLogin } from '../../entities/IUser';
import IUsersRepository from '../IUsers.repository';
import UserModel from '../../database/models/User';

export default class SequelizeUserRepository implements IUsersRepository {
  private model = UserModel;

  async findByEmail({ email, password }: IUserLogin): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email, password } });
    if (!user) return null;
    return user;
  }
}
