import { Request, Response } from 'express';
import FindInProgressService from './findInProgress.service';

export default class FindInProgressController {
  private _findInProgressService: FindInProgressService;

  constructor(findInProgressService: FindInProgressService) {
    this._findInProgressService = findInProgressService;
  }

  findQuery = async (req: Request, res: Response) => {
    const inProgress = req.query.inProgress as string;
    const resultMatches = await this._findInProgressService.findInProgress(inProgress);

    res.status(200).json(resultMatches);
  };
}
