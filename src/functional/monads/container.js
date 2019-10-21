export class Container {
  constructor(x) {
    this.$value = x;
  }

  map(f) {
    return Container.of(f(this.$value));
  }

  ap(container) {
    return container.map(this.$value);
  }

  inspect() {
    return this.$value;
  }

  static of(x) {
    return new Container(x);
  }
}
