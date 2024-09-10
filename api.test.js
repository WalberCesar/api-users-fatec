const supertest = require('supertest');
const {app,server, connection} = require('./index.js'); // Importe seu aplicativo Express

describe('Teste GET /users', () => {
  it('deve responder com status 200', async () => {
    const response = await supertest(app).get('/users');
    expect(response.statusCode).toBe(200);
  });
});

beforeAll(() => {
  server.on('error', async (e) => {
    if (e.code === 'EADDRINUSE') {
      console.log(e.code)
      await server.close()
    }
  });
})

afterAll(()=>{
    server.close();
    connection.close();
}); //fecha o servidor após os testes serem concluídos
