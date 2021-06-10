const express = require('express');
const resolvers = require('./resolvers');
const schema = require('./schema');


function createServer() {
  const app = express();
  const { graphqlHTTP } = require('express-graphql');
  const root = resolvers;

  app.use('/graphiql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  }))
  return app
}

module.exports = createServer
