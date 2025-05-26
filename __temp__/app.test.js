const request = require('supertest');
const app = require('../server'); // <- import the Express app

describe('Basic test', () => {
  it('should return 200 OK and expected message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from Node.js App (Blue-Green Deployment)');
  });
});
