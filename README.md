- npm init --yes
- npm i express express-graphql graphql

// set up babel for ES

- npm i --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
//write babel configs in  babelrc file
// Creating basic server.js with routing

- npm i nodemon
//updating script so that nodemon uses babel to start server

//Install sequelize and set it up
- npm i sequelize
- npm i pg pg-hstore   //serializing and deserializing JSON data to hstore format

//Create connection and model i.e. table for db(user table in this case)
//Sequelize v6 is used here

- npm i graphql-sequelize
//A helper for resolving graphql queries targeted at Sequelize models or associations.
// Create schema and resolvers

// "graphql-sequelize": "^9.4.3",
// Adding schema and graphql to server.js
// creating schema.js and types, query and mutation.
// Graphql and sequleize is setup and now can exchange data
