import { test } from 'vitest';
import request from 'supertest';

import app from '../../server/server.js';
const server = 'http://localhost:3030';

describe('Route Integration', () => {
  describe('/404Route', () => {
    test('respond with 404 status and text/html content type', () => {
      return request(server)
        .get('/fakeroute')
        .expect('Content-Type', /text\/html/)
        .expect(404);
    });
  });

  describe('/user', () => {
    describe('/user/login', () => {
      test('respond with 400 status for missing password to /login', () => {
        return request(server)
          .post('/user/login')
          .send({ username: 'KlusterFunk' })
          .expect('Content-Type', /json/)
          .expect(400, { err: 'Username and password required' });
      });
      test('respond with 400 status for missing username to /login', () => {
        return request(server)
          .post('/user/login')
          .send({ password: 'KlusterFunk' })
          .expect('Content-Type', /json/)
          .expect(400, { err: 'Username and password required' });
      });
    });

    describe('/user/signup', () => {
      test('respond with 400 status for missing password to /signup', () => {
        return request(server)
          .post('/user/signup')
          .send({ username: 'KlusterFunk' })
          .expect('Content-Type', /json/)
          .expect(400, { err: 'Username and password required' });
      });
      test('respond with 400 status for missing username to /signup', () => {
        return request(server)
          .post('/user/signup')
          .send({ password: 'KlusterFunk' })
          .expect('Content-Type', /json/)
          .expect(400, { err: 'Username and password required' });
      });
    });
  });
});
