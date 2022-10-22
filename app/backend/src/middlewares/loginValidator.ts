import { NextFunction, Request, Response } from 'express';
import CustomError from '../Error/customError';
import validateBodyLogin from './schema/validateLogin';

const loginValidator = (req: Request, _res: Response, next: NextFunction): void => {
  const { email, password } = req.body;
  const { error } = validateBodyLogin({ email, password });
  if (error) {
    throw new CustomError('All fields must be filled', 400);
  }

  next();
};
export default loginValidator;
