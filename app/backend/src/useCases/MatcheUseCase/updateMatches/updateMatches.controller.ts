import { Request, Response } from 'express';
import UpdateMatchesService from './updateMatches.service';

export default class UpdateMatchesController {
  private _updateMatchesService: UpdateMatchesService;

  constructor(updateMatchesService: UpdateMatchesService) {
    this._updateMatchesService = updateMatchesService;
  }

  update = async (req:Request, res: Response) => {
    const id = Number(req.params.id);
    await this._updateMatchesService.update(id);

    res.status(200).json({ message: 'Finished' });
  };
}
