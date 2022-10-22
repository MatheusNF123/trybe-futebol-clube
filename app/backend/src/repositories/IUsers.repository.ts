import IUser, { IUserLogin } from '../entities/IUser';

export default interface IUsersRepository {
  findByEmail(login: IUserLogin): Promise<IUser | null>
}
