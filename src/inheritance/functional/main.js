const createMongoDb = require('./createMongoDb');
const createApplicationCollection = require('./createApplicationCollection');
const createRequestCollection = require('./createRequestCollection');

async function bootstrap() {
  const db = await createMongoDb({
    url: 'mongodb://localhost:27017',
    dbName: 'dpp',
  });
  const applicationCollection = createApplicationCollection({ db });
  const requestCollection = createRequestCollection({ db });

  return {
    collection: {
      applications: applicationCollection,
      requests: requestCollection,
    },
  };
}

module.exports = bootstrap();
