const express = require('express');
const resolvers = require('./resolvers');
const schema = require('./schema');
const path = require('path');

function createServer() {
  const app = express();
  const { graphqlHTTP } = require('express-graphql');
  const root = resolvers;

  app.use(express.static(__dirname + ''));
  app.use(express.static(path.join(__dirname, '')));

  app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/index.html");
  });

  app.use('/graphiql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  }))
  return app
}

module.exports = createServer
