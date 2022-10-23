import { Request, Response } from 'express';
import FindAllClassificationHomeService from
  './findAllClassificationHome.service';

export default class FindAllClassificationHomeController {
  private _findAllClassificationHomeService: FindAllClassificationHomeService;

  constructor(findAllClassificationHomeService: FindAllClassificationHomeService) {
    this._findAllClassificationHomeService = findAllClassificationHomeService;
  }

  findAllClassificationHome = async (_req: Request, res: Response) => {
    const leaderBoard = await this._findAllClassificationHomeService.findAllLeaderBoardHome();

    res.status(200).json(leaderBoard);
  };
}
