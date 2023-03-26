const { MongoClient } = require('mongodb');

let connection;

async function createMongoDb({ url, dbName }) {
  if (!connection) {
    // Singleton design pattern
    connection = new MongoClient(url);
    await connection.connect();
  }

  return connection.db(dbName);
}

module.exports = createMongoDb;
