import { Request, Response } from 'express';
import 'express-async-errors';
import AuthLoginService from './authLogin.service';

export default class AuthLoginController {
  private _authLoginService: AuthLoginService;

  constructor(authLoginService: AuthLoginService) {
    this._authLoginService = authLoginService;
  }

  public loginValidade = async (req: Request, res: Response) => {
    const { email } = req.body;
    const role = await this._authLoginService.loginValidade({ email });

    res.status(200).json({ role });
  };
}
//
