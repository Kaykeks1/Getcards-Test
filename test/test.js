const chai = require('chai');
const request = require('supertest');
const assert = require('assert');
const createServer = require("../server")

const app = createServer();

describe('GET Bitcoin Price', () => {
  it('should fetch calculated price of bitcoin', (done) => {
    request(app)
    .get(`/graphiql?query=query{
      calculatePrice(type: "buy", margin: 10, exchangeRate: 0.0024)
    }`)
    .expect(200, done)
 });
});
