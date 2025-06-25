// __tests__/server.test.js
const request = require('supertest');
const app = require('../server.js');

describe('GET /', () => {
  it('should return the welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from Node.js App (Blue-Green Deployment)');
  });
});

describe('GET /unknown', () => {
  it('should return 404 for undefined routes', async () => {
    const res = await request(app).get('/unknown');
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe('Not Found');
  });
});
