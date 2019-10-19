const R = require("ramda");

class Container {
  constructor(x) {
    this.$value = x;
  }

  map(f) {
    return Container.of(f(this.$value));
  }

  static of(x) {
    return new Container(x);
  }
}

class Maybe {
  constructor(x) {
    this.$value = x;
  }

  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  map(f) {
    return this.isNothing ? this : Maybe.of(f(this.$value));
  }

  inspect() {
    return this.isNothing ? "Nothing" : `Just(${this.$value})`;
  }

  static of(x) {
    return new Maybe(x);
  }
}

/**
 * see R.unless, R.when
 * b -> (a -> b) -> Maybe a -> b
 */
const maybe = R.curry(function(v, f, m) {
  if (m.isNothing) {
    return v;
  }

  return f(m.$value);
});

module.exports = {
  Container,
  Maybe,
  maybe
};
