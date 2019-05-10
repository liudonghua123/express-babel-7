import request from 'supertest';
import app from '../src/app.js';
import { name, version } from '../package.json';

describe('GET /api', () => {
  it('should render properly', async () => {
    await request(app)
      .get('/api')
      .expect(200);
  });

  it('should return json data', async () => {
    const res = await request(app).get('/api');
    console.info(`res.body: ${JSON.stringify(res.body)}`);
    expect(res.body).toEqual({
      name,
      version
    });
  });
});
