import { Router } from 'express';
import findOneTeamController from '../useCases/TeamUseCase/findOneTeam';
import findAllTeamsController from '../useCases/TeamUseCase/findAllTeams';

const teamsRouter = Router();

teamsRouter.get('/teams', findAllTeamsController.findAllTeams);
teamsRouter.get('/teams/:id', findOneTeamController.findOneTeam);

export default teamsRouter;
