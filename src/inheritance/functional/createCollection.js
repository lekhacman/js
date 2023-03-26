function createCollection({ db, name }) {
  const collection = db.collection(name);

  function list() {
    return collection.find.apply(collection, arguments).toArray();
  }

  return {
    list,
    create: collection.insertOne,
    read: collection.findOne,
    update: collection.findOneAndUpdate,
    delete: collection.findOneAndDelete,
  };
}

module.exports = createCollection;
