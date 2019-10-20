import { pipe, map } from 'ramda';
import { IO } from './io';
import { of } from '../util';

describe('IO', function() {
  test('should construct', function() {
    const balance = of(IO)(100);
    expect(balance.inspect()).toEqual('IO(100)');

    expect(
      pipe(
        map(bal => bal - 10),
        map(bal => bal - 20),
        map(bal => bal - 30),
        map(bal => bal + 10),
        io => io.unsafePerformIO()
      )(balance)
    ).toEqual(50);
  });
});
