import { Request, Response } from 'express';
import CreateMatcheService from './createMatche.service';

export default class CreateMatchController {
  private _createMatchService: CreateMatcheService;
  constructor(createMatchService: CreateMatcheService) {
    this._createMatchService = createMatchService;
  }

  createMatches = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
    const matche = await this._createMatchService
      .createMatches({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true });

    res.status(201).json(matche);
  };
}
