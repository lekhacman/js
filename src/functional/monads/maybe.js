const R = require('ramda');

export class Maybe {
  constructor(x) {
    this.$value = x;
  }

  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  map(f) {
    return this.isNothing ? this : Maybe.of(f(this.$value));
  }

  join() {
    return this.isNothing ? Maybe.of(null) : this.$value;
  }

  inspect() {
    return this.isNothing ? 'Nothing' : `Just(${this.$value})`;
  }

  static of(x) {
    return new Maybe(x);
  }
}

/**
 * see R.unless, R.when
 * b -> (a -> b) -> Maybe a -> b
 */
export const maybe = R.curry(function(v, f, m) {
  if (m.isNothing) {
    return v;
  }

  return f(m.$value);
});
