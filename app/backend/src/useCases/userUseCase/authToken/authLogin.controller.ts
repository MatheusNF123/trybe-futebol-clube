import { Request, Response } from 'express';
import 'express-async-errors';
// import RequestUser from '../../../interfaces/IRequest';
import AuthLoginService from './authLogin.service';

export default class AuthLoginController {
  private _authLoginService: AuthLoginService;

  constructor(authLoginService: AuthLoginService) {
    this._authLoginService = authLoginService;
  }

  public loginValidade = async (req: Request, res: Response) => {
    // const request = req as RequestUser;
    const { email } = req.body.user;
    const role = await this._authLoginService.loginValidade({ email });

    res.status(200).json({ role });
  };
}
//
