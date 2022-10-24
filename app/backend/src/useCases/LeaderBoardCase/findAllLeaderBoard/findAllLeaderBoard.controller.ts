import { Request, Response } from 'express';
import FindAllLeaderBoardService from './findAllLeaderBoard.service';

export default class FindAllLeaderBoardController {
  private _findAllLeaderBoardService: FindAllLeaderBoardService;

  constructor(findAllLeaderBoardService: FindAllLeaderBoardService) {
    this._findAllLeaderBoardService = findAllLeaderBoardService;
  }

  findLeaderBoard = async (_req:Request, res: Response) => {
    const boardAwayTeam = await this._findAllLeaderBoardService.findLeaderBoard();

    res.status(200).json(boardAwayTeam);
  };
}
