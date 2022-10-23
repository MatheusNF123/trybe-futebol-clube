import { Request, Response } from 'express';
import FindAllClassificationAwayService from './findAllClassificationAway.service';

export default class FindAllClassificationAwayController {
  private _findAllClassificationService: FindAllClassificationAwayService;

  constructor(findAllClassificationService: FindAllClassificationAwayService) {
    this._findAllClassificationService = findAllClassificationService;
  }

  findLeaderBoardAway = async (_req:Request, res: Response) => {
    const boardAwayTeam = await this._findAllClassificationService.findLeaderBoardAway();

    res.status(200).json(boardAwayTeam);
  };
}
