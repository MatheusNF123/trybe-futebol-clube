import { ITeams } from './../entities/ITeams';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { Response } from 'superagent';
import Teams from '../database/models/Teams';
import { mockTeams, mockOneTeam } from './mocks/mockTeams';

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



