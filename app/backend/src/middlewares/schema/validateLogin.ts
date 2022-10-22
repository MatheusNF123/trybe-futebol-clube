import * as Joi from 'joi';
import { IUserLogin } from '../../entities/IUser';

const validateBodyLogin = (login: IUserLogin) => Joi.object({
  email: Joi.string().required().messages({
    'any.required': 'Incorrect email or password',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Incorrect email or password',
  }),
}).validate(login);

export default validateBodyLogin;
