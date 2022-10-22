import { Request, Response } from 'express';
import 'express-async-errors';
import FindAllTeamsService from './findAllTeams.service';

export default class FindAllTeamsController {
  private _findAllTeamsService: FindAllTeamsService;

  constructor(findAllTeamsService: FindAllTeamsService) {
    this._findAllTeamsService = findAllTeamsService;
  }

  public findAllTeams = async (req: Request, res: Response) => {
    const teams = await this._findAllTeamsService.findAllTeams();

    res.status(200).json(teams);
  };
}
