class Either {
  static of(x) {
    return new Right(x);
  }

  constructor(x) {
    this.$value = x;
  }
}

class Right extends Either {
  map(f) {
    return Either.of(f(this.$value));
  }

  inspect() {
    return `Right(${this.$value})`;
  }
}

class Left extends Either {
  static of(x) {
    return new Left(x);
  }

  constructor(x) {
    super(x);
  }

  map() {
    return this;
  }

  inspect() {
    return `Left(${this.$value})`;
  }
}

module.exports = {
  Either,
  Right,
  Left
};
