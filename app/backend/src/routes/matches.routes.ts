import { Router } from 'express';
import findInProgressController from '../useCases/MatcheUseCase/findInProgress';
import findAllMatchesController from '../useCases/MatcheUseCase/findAllMatches';

const matchesRouter = Router();

matchesRouter.get('/matches', findInProgressController.findQuery);
matchesRouter.get('/matches', findAllMatchesController.findAllMatches);

export default matchesRouter;
