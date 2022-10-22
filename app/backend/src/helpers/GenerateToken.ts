import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import ITokenConfig, { ITokenPayload } from '../interfaces/IToken';
import CustomError from '../Error/customError';

const secretKey = process.env.JWT_SECRET || 'jwt_secret';

export default class Token {
  static generateToken = (payload: ITokenPayload): string => {
    const jwtConfig: ITokenConfig = {
      expiresIn: '20h',
    };
    const token = jwt.sign(payload, secretKey, jwtConfig);

    return token;
  };

  static authToken = (req: Request, _res:Response, next:NextFunction): void => {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new CustomError('Token not found', 401);
    }

    try {
      const verificaToken = jwt.verify(authorization, secretKey);

      req.body = verificaToken as ITokenPayload;

      next();
    } catch (error) {
      throw new CustomError('Invalid token', 401);
    }
  };
}
