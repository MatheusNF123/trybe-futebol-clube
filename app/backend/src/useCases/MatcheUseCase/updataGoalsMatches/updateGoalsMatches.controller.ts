import { Request, Response } from 'express';
import UpdateGoalsMatchesService from './updateGoalsMatches.service';

export default class UpdateGoalsMatchesController {
  private _updateGoalsMatchesService: UpdateGoalsMatchesService;

  constructor(updateGoalsMatchesService: UpdateGoalsMatchesService) {
    this._updateGoalsMatchesService = updateGoalsMatchesService;
  }

  updateGoals = async (req: Request, res: Response) => {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const id = Number(req.params.id);
    await this._updateGoalsMatchesService.updateGoals({ homeTeamGoals, awayTeamGoals, id });

    res.status(200).json({ updated: 'OK' });
  };
}
