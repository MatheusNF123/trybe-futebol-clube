export interface IUserID {
  id: number;
}

export interface IUserUsername {
  username: string
}

export interface IUserLogin {
  email: string;
  password: string;
}

export default interface IUser extends IUserID, IUserUsername, IUserLogin{}
