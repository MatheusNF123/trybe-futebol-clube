import { Router } from 'express';
import findInProgressController from '../useCases/MatcheUseCase/findInProgress';
import findAllMatchesController from '../useCases/MatcheUseCase/findAllMatches';
import createMatchController from '../useCases/MatcheUseCase/createMatches';
import Token from '../helpers/GenerateToken';

const matchesRouter = Router();

matchesRouter.post('/matches', Token.authToken, createMatchController.createMatches);
matchesRouter.get('/matches', findInProgressController.findQuery);
matchesRouter.get('/matches', findAllMatchesController.findAllMatches);

export default matchesRouter;
