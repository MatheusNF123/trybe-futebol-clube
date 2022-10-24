import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import ITokenConfig, { ITokenPayload } from '../interfaces/IToken';
import CustomError from '../Error/customError';
// import RequestUser from '../interfaces/IRequest';

const secretKey = process.env.JWT_SECRET as string;

export default class Token {
  static generateToken = (payload: ITokenPayload): string => {
    const jwtConfig: ITokenConfig = {
      expiresIn: '20h',
    };
    const token = jwt.sign(payload, secretKey, jwtConfig);

    return token;
  };

  static authToken = (req: Request, _res:Response, next:NextFunction): void => {
    // const request = req as RequestUser;
    const { authorization } = req.headers;
    if (!authorization) {
      throw new CustomError('Token must be a valid token', 401);
    }

    try {
      const verificaToken = jwt.verify(authorization, secretKey);

      req.body = { ...req.body, user: verificaToken };

      next();
    } catch (error) {
      // const err = { status: 401, message: 'invalid token' };
      throw new CustomError('Token must be a valid token', 401);
    }
  };
}
