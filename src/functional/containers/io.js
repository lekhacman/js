import { compose } from 'ramda';

export function IO(spec) {
  const value = spec;

  function map(fn) {
    return IO(
      compose(
        fn,
        value
      )
    );
  }

  function inspect() {
    return `IO(${value()})`;
  }

  function unsafePerformIO() {
    return value();
  }

  return {
    map,
    inspect,
    unsafePerformIO,
  };
}
