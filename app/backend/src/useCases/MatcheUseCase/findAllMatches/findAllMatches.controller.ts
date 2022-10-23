import { Request, Response } from 'express';
import FindAllMatchesService from './findAllMatches.service';

export default class FindAllMatchesController {
  private _findAllMatchesServices: FindAllMatchesService;

  constructor(findAllMatchesServices: FindAllMatchesService) {
    this._findAllMatchesServices = findAllMatchesServices;
  }

  findAllMatches = async (_req: Request, res: Response) => {
    const matches = await this._findAllMatchesServices.findAllMatches();

    res.status(200).json(matches);
  };
}
