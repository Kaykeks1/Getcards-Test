const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    calculatePrice(type: String, margin: Float, exchangeRate: Float): Float
  }
`);

module.exports = schema;
