const createCollection = require('./createCollection');

function createRequestCollection({ db }) {
  return createCollection({ db, name: 'requests' });
}

module.exports = createRequestCollection;
