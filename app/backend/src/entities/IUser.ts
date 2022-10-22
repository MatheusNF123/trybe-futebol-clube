export interface IUserID {
  id: number;
}

export interface IUserUsername {
  username: string;
  role: string;
}

export interface IUserEmail {
  email: string;
}

export interface IUserLogin extends IUserEmail {

  password: string;
}

export default interface IUser extends IUserID, IUserUsername, IUserLogin{}
