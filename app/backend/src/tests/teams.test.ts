import { ITeams } from './../entities/ITeams';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';


import SequelizeTeamsRepository from '../repositories/implementations/SequelizeTeams.repository';
import FindOneTeamService from '../useCases/TeamUseCase/findOneTeam/findOneTeam.service';
import FindOneTeamController from '../useCases/TeamUseCase/findOneTeam/findOneTeam.controller';
const repositoryTeams = new SequelizeTeamsRepository()
const findOneTeamService = new FindOneTeamService(repositoryTeams)
const findOneTeamController = new FindOneTeamController(findOneTeamService)
import { Response } from 'superagent';
import Teams from '../database/models/Teams';



const mockTeams: ITeams[] =  [
  {
    id: 1,
    teamName: 'Avaí/Kindermann',
  },
  {
    id: 2,
    teamName: 'Bahia',
  },
  {
    id: 3,
    teamName: 'Botafogo',
  },
  {
    id: 4,
    teamName: 'Corinthians',
  },
  {
    id: 5,
    teamName: 'Cruzeiro',
  },
  {
    id: 6,
    teamName: 'Ferroviária',
  },
  {
    id: 7,
    teamName: 'Flamengo',
  },
  {
    id: 8,
    teamName: 'Grêmio',
  },
  {
    id: 9,
    teamName: 'Internacional',
  },
  {
    id: 10,
    teamName: 'Minas Brasília',
  },
  {
    id: 11,
    teamName: 'Napoli-SC',
  },
  {
    id: 12,
    teamName: 'Palmeiras',
  },
  {
    id: 13,
    teamName: 'Real Brasília',
  },
  {
    id: 14,
    teamName: 'Santos',
  },
  {
    id: 15,
    teamName: 'São José-SP',
  },
  {
    id: 16,
    teamName: 'São Paulo',
  },
]

const mockOneTeam = {  
    id: 1,
    teamName: 'Avaí/Kindermann'  
}



chai.use(chaiHttp);

const { expect } = chai;

describe('Teste da rota get /Teams', () => {
  describe("quando a requisição e feita com sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 200', async () => {
      sinon.stub(Teams, "findAll").resolves( mockTeams as Teams[] );  
      const httpResponse = await chai.request(app).get("/teams").send();
      expect(httpResponse.status).to.be.equal(200);
    })
    it('deve retornar todos os times', async () => {
      sinon.stub(Teams, "findAll").resolves( mockTeams as Teams[] );        
      const httpResponse = await chai.request(app).get("/teams").send();
      expect(httpResponse.body).to.deep.equal(mockTeams);
    })
   
  })  
});

describe('Teste da rota get /Teams/:id', () => {
  describe("quando a requisição e feita com sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 200', async () => {
      sinon.stub(Teams, "findOne").resolves( mockOneTeam as Teams );  
      const httpResponse = await chai.request(app).get("/teams/1").send();
      expect(httpResponse.status).to.be.equal(200);
    })
    it('deve retornar um time', async () => {
      sinon.stub(Teams, "findOne").resolves( mockOneTeam as Teams );        
      const httpResponse = await chai.request(app).get("/teams/1").send();
      expect(httpResponse.body).to.deep.equal(mockOneTeam);
    })   
  })  
  describe("quando a requisição e feita sem sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 401', async () => {
      sinon.stub(Teams, "findOne").resolves( null );      
      const httpResponse = await chai.request(app).get("/teams/9999").send();
      expect(httpResponse.status).to.be.equal(401);
    })
    it('deve retornar uma mensagem "nao existe time com esse id"', async () => {
      sinon.stub(Teams, "findOne").resolves( null );      
      const httpResponse = await chai.request(app).get("/teams/9999").send();
      expect(httpResponse.body).to.deep.equal({message: 'nao existe time com esse id'});
    })
     
  })  
});


  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
