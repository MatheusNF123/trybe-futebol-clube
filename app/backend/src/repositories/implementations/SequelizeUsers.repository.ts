import IUser, { IUserEmail } from '../../entities/IUser';
import IUsersRepository from '../IUsers.repository';
import UserModel from '../../database/models/User';

export default class SequelizeUserRepository implements IUsersRepository {
  private model = UserModel;

  async findByEmail({ email }: IUserEmail): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });

    if (!user?.email) return null;
    return user;
  }
}
