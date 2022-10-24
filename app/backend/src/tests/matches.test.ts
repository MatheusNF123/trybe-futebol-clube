import { ITeams } from './../entities/ITeams';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import Matches from '../database/models/Matches';
import mockAllTeam, {mockTeamsInProgressTrue,  mockInsertMatches,
  mockResultInsertMatches, mockErrorPostMatches, mockGoalsMatches, mockTeamHomeErrorTeam,
  mockTeamAwayErrorTeam} from './mocks/mockMatches'
import Token from '../helpers/GenerateToken';
import mockLogin from './mocks/mockLogin';


chai.use(chaiHttp);

const { expect } = chai;



 describe('Teste da rota get /matches', () => {
  describe("quando a requisição e feita com sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 200', async () => {
      sinon.stub(Matches, "findAll").resolves( mockAllTeam as Matches[] );  
      const httpResponse = await chai.request(app).get("/matches").send();
      expect(httpResponse.status).to.be.equal(200);
    })
    it('deve retornar todos os times', async () => {
      sinon.stub(Matches, "findAll").resolves( mockAllTeam as Matches[] );        
      const httpResponse = await chai.request(app).get("/matches").send();
      expect(httpResponse.body).to.deep.equal(mockAllTeam);
    })   
  })  
});
 describe('Teste da rota get /matches?inProgress=true', () => {
  describe("quando a requisição e feita com sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 200', async () => {
      sinon.stub(Matches, "findAll").resolves( mockTeamsInProgressTrue as Matches[] );  
      const httpResponse = await chai.request(app).get("/matches?inProgress=true").send();
      expect(httpResponse.status).to.be.equal(200);
    })
    it('deve retornar todos os times inProgress true', async () => {
      sinon.stub(Matches, "findAll").resolves( mockTeamsInProgressTrue as Matches[] );        
      const httpResponse = await chai.request(app).get("/matches?inProgress=true").send();
      expect(httpResponse.body).to.deep.equal(mockTeamsInProgressTrue);
    })   
  })  
});
 describe('Teste da rota get /matches?inProgress=false', () => {
  describe("quando a requisição e feita com sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 200', async () => {
      sinon.stub(Matches, "findAll").resolves( mockAllTeam as Matches[] );  
      const httpResponse = await chai.request(app).get("/matches?inProgress=false").send();
      expect(httpResponse.status).to.be.equal(200);
    })
    it('deve retornar todos os times inProgress false', async () => {
      sinon.stub(Matches, "findAll").resolves( mockAllTeam as Matches[] );        
      const httpResponse = await chai.request(app).get("/matches?inProgress=false").send();
      expect(httpResponse.body).to.deep.equal(mockAllTeam);
    })   
  })  
});
 describe('Teste da rota post /matches', () => {
  describe("quando a requisição e feita com sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 201', async () => {
      sinon.stub(Matches, "create").resolves( mockResultInsertMatches as Matches ); 
      const httpResponseToken = await chai.request(app).post("/login").send(mockLogin)
      const httpResponse = await chai.request(app).post("/matches").send(mockInsertMatches).set('Authorization', httpResponseToken.body.token)
      expect(httpResponse.status).to.be.equal(201);
    })
    it('deve retornar todos os dados da partida', async () => {
      sinon.stub(Matches, "create").resolves( mockResultInsertMatches as Matches );        
      const httpResponseToken = await chai.request(app).post("/login").send(mockLogin)
      const httpResponse = await chai.request(app).post("/matches").send(mockInsertMatches).set('Authorization', httpResponseToken.body.token)
      expect(httpResponse.body).to.deep.equal(mockResultInsertMatches);
    })   
  })  
  describe("quando a requisição e feita sem sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 422 ao passar times iguais', async () => {
      const httpResponseToken = await chai.request(app).post("/login").send(mockLogin)
      const httpResponse = await chai.request(app).post("/matches").send(mockErrorPostMatches).set('Authorization', httpResponseToken.body.token)
      expect(httpResponse.status).to.be.equal(422);
    })
    it('deve retornar a mensagem "It is not possible to create a match with two equal teams" ao passar times iguais', async () => {
      const httpResponseToken = await chai.request(app).post("/login").send(mockLogin)
      const httpResponse = await chai.request(app).post("/matches").send(mockErrorPostMatches).set('Authorization', httpResponseToken.body.token)
      expect(httpResponse.body).to.deep.equal({message: "It is not possible to create a match with two equal teams"});
    })   
    it('deve retornar um status 401 ao passar um token invalido', async () => {
      const httpResponse = await chai.request(app).post("/matches").send(mockErrorPostMatches).set('Authorization', 'tokenInvalido')
      expect(httpResponse.status).to.be.equal(401);
    })   
    it('deve retornar uma mensagem "Token must be a valid token"  ao passar um token invalido', async () => {
      const httpResponse = await chai.request(app).post("/matches").send(mockErrorPostMatches).set('Authorization', 'tokenInvalido')
      expect(httpResponse.body).to.deep.equal({message: "Token must be a valid token" });
    })   
    it('deve retornar um status 404 ao passar um time que não existe', async () => {
      sinon.stub(Matches, "findAll").resolves( mockAllTeam as Matches[] ); 
      const httpResponseToken = await chai.request(app).post("/login").send(mockLogin)
      const httpResponse = await chai.request(app).post("/matches").send(mockTeamHomeErrorTeam).set('Authorization', httpResponseToken.body.token)
      expect(httpResponse.status).to.be.equal(404);
    })   
    it('deve retornar uma mensagem "There is no team with such id!" ao passar um time que não existe ', async () => {
      sinon.stub(Matches, "findAll").resolves( mockAllTeam as Matches[] ); 
      const httpResponseToken = await chai.request(app).post("/login").send(mockLogin)
      const httpResponse = await chai.request(app).post("/matches").send(mockTeamHomeErrorTeam).set('Authorization', httpResponseToken.body.token)
      expect(httpResponse.body).to.deep.equal({message: "There is no team with such id!" });
    })   
  })  
});
 describe('Teste da rota patch /matches/id:/finish', () => {
  describe("quando a requisição e feita com sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 200', async () => {
      const httpResponse = await chai.request(app).patch("/matches/33/finish")
      expect(httpResponse.status).to.be.equal(200);
    })
    it('deve retornar a mensagem finished: OK', async () => {
      const httpResponse = await chai.request(app).patch("/matches/33/finish")
      expect(httpResponse.body).to.deep.equal({message: 'Finished'});
    })   
  })  
});
 describe('Teste da rota patch /matches/id:', () => {
  describe("quando a requisição e feita com sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar uma mensagem  {updated: "OK"}', async () => {
      const httpResponse = await  chai.request(app).patch("/matches/33").send(mockGoalsMatches)
      expect(httpResponse.status).to.be.equal(200);
    })
    it('deve retornar um status 200', async () => {
      const httpResponse = await  chai.request(app).patch("/matches/33").send(mockGoalsMatches)
      expect(httpResponse.body).to.deep.equal({updated: 'OK'});
    })
 
  })  
});


