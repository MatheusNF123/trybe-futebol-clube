import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import mockLeaderBoardHome,{mockLeaderBoardAway,
   mockLeaderBoardAll} from "./mocks/mockLeaderBoard"
import { Response } from 'superagent';
import sequelize from '../database/models'


chai.use(chaiHttp);

const { expect } = chai;



 describe('Teste da rota get /leaderboard/home', () => {
  describe("quando a requisição e feita com sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 200', async () => {
      sinon.stub(sequelize, "query").resolves([,mockLeaderBoardHome] as any );  
      const httpResponse = await chai.request(app).get("/leaderboard/home").send();
      expect(httpResponse.status).to.be.equal(200);
      
    })
    it('deve retornar os time da casa', async () => {
      sinon.stub(sequelize, "query").resolves( [,mockLeaderBoardHome] as any );  
      const httpResponse = await chai.request(app).get("/leaderboard/home").send();
      expect(httpResponse.body).to.deep.equal(mockLeaderBoardHome);      
    }) 
  })  
});
 describe('Teste da rota get /leaderboard/away', () => {
  describe("quando a requisição e feita com sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 200', async () => {
      sinon.stub(sequelize, "query").resolves([,mockLeaderBoardAway] as any );  
      const httpResponse = await chai.request(app).get("/leaderboard/away").send();
      expect(httpResponse.status).to.be.equal(200);
    
      
    })
    it('deve retornar os time da casa', async () => {
      sinon.stub(sequelize, "query").resolves([,mockLeaderBoardAway] as any );  
      const httpResponse = await chai.request(app).get("/leaderboard/away").send();
      expect(httpResponse.body).to.deep.equal(mockLeaderBoardAway);      
    }) 
  })  
});
 describe('Teste da rota get /leaderboard', () => {
  describe("quando a requisição e feita com sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 200', async () => {
      sinon.stub(sequelize, "query").resolves( [, mockLeaderBoardAll] as any );  
      const httpResponse = await chai.request(app).get("/leaderboard").send();
      expect(httpResponse.status).to.be.equal(200);      
    })
    it('deve retornar a board de time geral', async () => {
      sinon.stub(sequelize, "query").resolves( [, mockLeaderBoardAll] as any ); 
      const httpResponse = await chai.request(app).get("/leaderboard").send();         
      expect(httpResponse.body).to.deep.equal(mockLeaderBoardAll);      
    }) 
   
  
  
  })  
});


