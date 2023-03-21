const { Container, Maybe } = require('./chap8');
const { add } = require('ramda');

describe('Chapter 8', function() {
  it('Container should be a functor', function() {
    const num = Container.of(8);

    expect(num.value).toEqual(8);

    expect(num.map(x => x + 1).value).toEqual(9);
  });

  it('Maybe should be safe', function() {
    const optional = Maybe.of(8);

    expect(optional.map(add(1)).map(add(2)).value).toEqual(11);

    const nothing = Maybe.of(null);
    expect(nothing.map(add(1)).map(add(2)).value).toEqual(null);
  });
});
