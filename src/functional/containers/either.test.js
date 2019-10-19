const R = require('ramda');
const { Either, Left, Right } = require('./either');

test('Either', () => {
  expect(Either.of('rain').map(str => `b${str}`)).toEqual(Right.of('brain'));

  expect(Left.of('rain').map(str => `b${str}`)).toEqual(Left.of('rain'));

  expect(
    Either.of({ host: 'localhost', port: 443 }).map(R.prop('host'))
  ).toEqual(Right.of('localhost'));

  expect(Left.of('Andrew').map(R.prop('host'))).toEqual(Left.of('Andrew'));
});
