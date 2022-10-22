import { Request, Response } from 'express';
import FindOneTeamService from './findOneTeam.service';

export default class FindOneTeamController {
  private _findOneTeamService: FindOneTeamService;

  constructor(findOneTeamService: FindOneTeamService) {
    this._findOneTeamService = findOneTeamService;
  }

  public findOneTeam = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const team = await this._findOneTeamService.findOneTeam(id);
    res.status(200).json(team);
  };
}
