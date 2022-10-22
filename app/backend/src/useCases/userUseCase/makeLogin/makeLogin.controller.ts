import { Request, Response } from 'express';
import 'express-async-errors';
import MakeLoginService from './makeLogin.service';

export default class MakeLoginController {
  private _makeLoginService: MakeLoginService;

  constructor(makeLoginService: MakeLoginService) {
    this._makeLoginService = makeLoginService;
  }

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const token = await this._makeLoginService.login({ email, password });

    res.status(200).json({ token });
  };
}
//
