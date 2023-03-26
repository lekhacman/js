const createCollection = require('./createCollection');

function createApplicationCollection({ db }) {
  return createCollection({ db, name: 'applications' });
}

module.exports = createApplicationCollection;
