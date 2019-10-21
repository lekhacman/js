import * as R from 'ramda';
import { Container } from './container';

test('Container', () => {
  const c = Container.of(3);
  expect(c.map(x => x + 2)).toEqual(Container.of(5));
});

test('should be applicative', function() {
  const cOf5 = Container.of(2)
    .map(R.add)
    .ap(Container.of(3));

  expect(cOf5.inspect()).toEqual(5);
});
