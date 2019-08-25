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

module.exports = {
  Container,
  Maybe
};
