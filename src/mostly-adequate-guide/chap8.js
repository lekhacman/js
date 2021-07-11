function Functor(value) {
  this.value = value;
}

Functor.prototype.map = function (f) {
  return Functor.of(f(this.value));
};

Functor.of = function (value) {
  return new Functor(value);
};
