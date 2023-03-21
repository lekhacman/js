const R = require('ramda');
describe('Chapter 10: Applicative Functors', function() {
  it('should add', function() {
    expect(R.pipe(R.chain(R.add(R.of(3))))(R.of(2)).pop()).toEqual(5);
  });

  it('should ap', function() {
    expect(R.ap(R.of(R.add(2)), R.of(3)).pop()).toEqual(5);
  });
});
