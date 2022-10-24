import SequelizeLeaderBoardRepository from
 '../repositories/implementations/SequelizeLeaderBoard.repository';
import { ITeams } from './../entities/ITeams';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import mockLeaderBoardHome from "./mocks/mockLeaderBoard"
import { Response } from 'superagent';
import sequelize from '../database/models'
import ILeaderBoard from '../entities/ILeaderBoard';
const LeaderBoardRepository = new SequelizeLeaderBoardRepository();


chai.use(chaiHttp);

const { expect } = chai;



 describe('Teste da rota get /leaderboard/home', () => {
  describe("quando a requisição e feita com sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 200', async () => {
      sinon.stub(LeaderBoardRepository, "findAllHome").resolves( mockLeaderBoardHome as [] );  
      const httpResponse = await chai.request(app).get("/leaderboard/home").send();
      expect(httpResponse.status).to.be.equal(200);
    })
    // it('deve retornar todos o resultado dos times da casa', async () => {
    //   sinon.stub(LeaderBoardRepository, "findAllHome").resolves( mockLeaderBoardHome as any);        
    //   const httpResponse = await chai.request(app).get("/leaderboard/home").send();
    //   expect(httpResponse.body).to.deep.equal(mockLeaderBoardHome);
    // })   
  })  
});
//  describe('Teste da rota get /matches?inProgress=true', () => {
//   describe("quando a requisição e feita com sucesso", () => {
//     afterEach(function () {
//       sinon.restore();
//     });
//     it('deve retornar um status 200', async () => {
//       sinon.stub(Matches, "findAll").resolves( mockTeamsInProgressTrue as Matches[] );  
//       const httpResponse = await chai.request(app).get("/matches?inProgress=true").send();
//       expect(httpResponse.status).to.be.equal(200);
//     })
//     it('deve retornar todos os times inProgress true', async () => {
//       sinon.stub(Matches, "findAll").resolves( mockTeamsInProgressTrue as Matches[] );        
//       const httpResponse = await chai.request(app).get("/matches?inProgress=true").send();
//       expect(httpResponse.body).to.deep.equal(mockTeamsInProgressTrue);
//     })   
//   })  
// });
//  describe('Teste da rota get /matches?inProgress=false', () => {
//   describe("quando a requisição e feita com sucesso", () => {
//     afterEach(function () {
//       sinon.restore();
//     });
//     it('deve retornar um status 200', async () => {
//       sinon.stub(Matches, "findAll").resolves( mockAllTeam as Matches[] );  
//       const httpResponse = await chai.request(app).get("/matches?inProgress=false").send();
//       expect(httpResponse.status).to.be.equal(200);
//     })
//     it('deve retornar todos os times inProgress false', async () => {
//       sinon.stub(Matches, "findAll").resolves( mockAllTeam as Matches[] );        
//       const httpResponse = await chai.request(app).get("/matches?inProgress=false").send();
//       expect(httpResponse.body).to.deep.equal(mockAllTeam);
//     })   
//   })  
// });
//  describe('Teste da rota post /matches', () => {
//   describe("quando a requisição e feita com sucesso", () => {
//     afterEach(function () {
//       sinon.restore();
//     });
//     it('deve retornar um status 201', async () => {
//       sinon.stub(Matches, "create").resolves( mockResultInsertMatches as Matches ); 
//       const httpResponseToken = await chai.request(app).post("/login").send(mockLogin)
//       const httpResponse = await chai.request(app).post("/matches").send(mockInsertMatches).set('Authorization', httpResponseToken.body.token)
//       expect(httpResponse.status).to.be.equal(201);
//     })
//     it('deve retornar todos os dados da partida', async () => {
//       sinon.stub(Matches, "create").resolves( mockResultInsertMatches as Matches );        
//       const httpResponseToken = await chai.request(app).post("/login").send(mockLogin)
//       const httpResponse = await chai.request(app).post("/matches").send(mockInsertMatches).set('Authorization', httpResponseToken.body.token)
//       expect(httpResponse.body).to.deep.equal(mockResultInsertMatches);
//     })   
//   })  
//   describe("quando a requisição e feita sem sucesso", () => {
//     afterEach(function () {
//       sinon.restore();
//     });
//     it('deve retornar um status 422 ao passar times iguais', async () => {
//       const httpResponseToken = await chai.request(app).post("/login").send(mockLogin)
//       const httpResponse = await chai.request(app).post("/matches").send(mockErrorPostMatches).set('Authorization', httpResponseToken.body.token)
//       expect(httpResponse.status).to.be.equal(422);
//     })
//     it('deve retornar a mensagem "It is not possible to create a match with two equal teams" ao passar times iguais', async () => {
//       const httpResponseToken = await chai.request(app).post("/login").send(mockLogin)
//       const httpResponse = await chai.request(app).post("/matches").send(mockErrorPostMatches).set('Authorization', httpResponseToken.body.token)
//       expect(httpResponse.body).to.deep.equal({message: "It is not possible to create a match with two equal teams"});
//     })   
//     it('deve retornar um status 401 ao passar um token invalido', async () => {
//       const httpResponse = await chai.request(app).post("/matches").send(mockErrorPostMatches).set('Authorization', 'tokenInvalido')
//       expect(httpResponse.status).to.be.equal(401);
//     })   
//     it('deve retornar uma mensagem "Token must be a valid token"  ao passar um token invalido', async () => {
//       const httpResponse = await chai.request(app).post("/matches").send(mockErrorPostMatches).set('Authorization', 'tokenInvalido')
//       expect(httpResponse.body).to.deep.equal({message: "Token must be a valid token" });
//     })   
//   })  
// });
//  describe('Teste da rota patch /matches/id:/finish', () => {
//   describe("quando a requisição e feita com sucesso", () => {
//     afterEach(function () {
//       sinon.restore();
//     });
//     it('deve retornar um status 200', async () => {
//       const httpResponse = await chai.request(app).patch("/matches/33/finish")
//       expect(httpResponse.status).to.be.equal(200);
//     })
//     it('deve retornar a mensagem finished: OK', async () => {
//       const httpResponse = await chai.request(app).patch("/matches/33/finish")
//       expect(httpResponse.body).to.deep.equal({message: 'Finished'});
//     })   
//   })  
// });
//  describe('Teste da rota patch /matches/id:', () => {
//   describe("quando a requisição e feita com sucesso", () => {
//     afterEach(function () {
//       sinon.restore();
//     });
//     it('deve retornar uma mensagem  {updated: "OK"}', async () => {
//       const httpResponse = await  chai.request(app).patch("/matches/33").send(mockGoalsMatches)
//       expect(httpResponse.status).to.be.equal(200);
//     })
//     it('deve retornar um status 200', async () => {
//       const httpResponse = await  chai.request(app).patch("/matches/33").send(mockGoalsMatches)
//       expect(httpResponse.body).to.deep.equal({updated: 'OK'});
//     })
 
//   })  
// });


