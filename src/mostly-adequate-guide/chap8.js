function Container(x) {
  this.value = x;
}

Container.prototype.map = function(fn) {
  if (this.value) {
    return Container.of(fn(this.value));
  }

  return this;
};

Container.of = function(x) {
  return new Container(x);
};

function Maybe(x) {
  this.value = x;
}

Maybe.prototype.map = function(fn) {
  if (this.value) {
    return Maybe.of(fn(this.value));
  }

  return this;
};

Maybe.of = function(x) {
  return new Maybe(x);
};

module.exports = { Container, Maybe };
