import { Router } from 'express';
import findAllTeamsController from '../useCases/TeamUseCase/findAllTeams';

const teamsRouter = Router();

teamsRouter.get('/teams', findAllTeamsController.findAllTeams);

export default teamsRouter;
