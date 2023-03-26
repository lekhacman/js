jest.mock('mongodb', () => ({
  MongoClient: jest.fn(() => ({
    connect: jest.fn(),
    db: jest.fn(() => ({
      collection: jest.fn(() => ({ findOne: jest.fn() })),
    })),
  })),
}));
describe('Functional inheritance', function() {
  it('should inherit', async function() {
    const { collection } = await require('./main');

    expect(Object.hasOwn(collection.applications, 'read')).toBe(true);
  });
});
