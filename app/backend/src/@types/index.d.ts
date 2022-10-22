type IUsers = {
  id?: number;
  email: string
};

declare namespace Express {
  interface Request {
    user: IUsers;
  }
}
