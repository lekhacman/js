import { of } from './util';

test('of should construct', function() {
  function api(spec) {
    return {
      url: spec(),
    };
  }

  const host = 'localhost';

  const target = of(api)(host);

  expect(target.url).toEqual(host);
});
