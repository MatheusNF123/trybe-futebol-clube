import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';
import IUser from '../entities/IUser'
import SequelizeUserRepository from '../repositories/implementations/SequelizeUsers.repository';
import MakeLoginService from '../useCases/userUseCase/makeLogin/makeLogin.service';
import Token from '../helpers/GenerateToken';

import { Response } from 'superagent';

const repositoryLogin = new SequelizeUserRepository()
const makeLoginService = new MakeLoginService(repositoryLogin);


const mockLogin = {
  email: 'admin@admin.com',
  password: 'secret_admin'
}

const mockUser: IUser = {
  id: 1,
  username: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  role: 'admin'
}

const mockToken = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY2NjQ1NzAyMCwiZXhwIjoxNjY2NTI5MDIwfQ.X4dCRkUds61AjJn-OZBEuD_TlXxttQ2IBGR-Unju154'
}

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste da rota post /Login', () => {
  describe("quando a requisição e feita com sucesso", () => {
    afterEach(function () {
      sinon.restore();
    });
    it('deve retornar um status 200', async () => {
      sinon.stub(User, "findOne").resolves( mockUser as User );  
      const httpResponse = await chai.request(app).post("/login").send(mockLogin);
      expect(httpResponse.status).to.be.equal(200);
    })
    it('deve retornar um token', async () => {
      sinon.stub(User, "findOne").resolves( mockUser as User );       
      sinon.stub(Token, "generateToken").resolves( mockToken.token );  
      const httpResponse = await chai.request(app).post("/login").send(mockLogin);
      expect(httpResponse.body).to.deep.equal(mockToken);
    })
   
  })
  describe("quando a requisição sem sucesso", () => {  
    afterEach(function () {
      sinon.restore();
    });

    it('deve retornar um status 401 ', async () => {
      sinon.stub(User, "findOne").resolves( null );  
      const httpResponse = await chai.request(app).post("/login").send({email: "lalaland", password: 'lalaland'});
      expect(httpResponse.status).to.be.equal(401);
      
    })   
    it('deve retornar a mensagem  Incorrect email or password com email incorreto', async () => {
      sinon.stub(User, "findOne").resolves( null );  
      const httpResponse = await chai.request(app).post("/login").send({email: "adasdasdmin@admin.com", password: 'secret_admin'});
      expect(httpResponse.body).to.deep.equal({message: 'Incorrect email or password'});
      
    })   
    it('deve retornar a mensagem  Incorrect email or password com senha incorreta', async () => {
      sinon.stub(User, "findOne").resolves( mockUser as User );  
      const httpResponse = await chai.request(app).post("/login").send({email: "admin@admin.com", password: 'sasdasdd'});
      expect(httpResponse.body).to.deep.equal({message: 'Incorrect email or password'});
      
    })   
    it('deve retornar a mensagem  All fields must be filled sem o campo password informado', async () => {
      // sinon.stub(User, "findOne").resolves( mockUser as User );  
      const httpResponse = await chai.request(app).post("/login").send({email: "admin@admin.com"});
      expect(httpResponse.body).to.deep.equal({message: 'All fields must be filled'});
      
    })   
    it('deve retornar a mensagem  All fields must be filled sem o campo email informado', async () => {
      // sinon.stub(User, "findOne").resolves( mockUser as User );  
      const httpResponse = await chai.request(app).post("/login").send({password: 'sasdasdd'});
      expect(httpResponse.body).to.deep.equal({message: 'All fields must be filled'});
      
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
