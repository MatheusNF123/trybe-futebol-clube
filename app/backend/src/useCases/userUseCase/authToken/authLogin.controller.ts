import { Request, Response } from 'express';
import 'express-async-errors';
// import RequestUser from '../../../interfaces/IRequest';
// import AuthLoginService from './authLogin.service';

export default class AuthLoginController {
  public loginValidade = async (req: Request, res: Response) => {
    // const request = req as RequestUser;
    const { role } = req.body.user;
    // const role = await this._authLoginService.loginValidade({ email });

    res.status(200).json({ role });
  };
}
//
