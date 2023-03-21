const R = require('ramda');

const user = {
  id: 1,
  name: 'Albert',
  address: {
    street: {
      number: 22,
      name: 'Walnut St',
    },
  },
};

const getStreetName = R.compose(
  R.chain(R.prop('name')),
  R.chain(R.prop('street')),
  R.of,
  R.prop('address')
);

console.log(getStreetName(user));
console.log(getStreetName({}));

function IO(f) {
  this.f = f;
}

IO.prototype.map = function(f) {
  return new IO(
    R.compose(
      f,
      this.f
    )
  );
};

IO.prototype.unsafePerformIO = function() {
  return this.f();
};

IO.prototype.inspect = function() {
  return `IO(${this.f()})`;
};

IO.prototype.join = function() {
  return this.unsafePerformIO();
};

IO.prototype.concat = IO.prototype.join;

IO.of = function(value) {
  return new IO(() => value);
};

const getFile = IO.of('/home/mostly-adequate/ch09.md');

const pureLog = str => new IO(() => console.log(str));

const logFilename = R.compose(
  // R.chain(pureLog),
  // x => {
  //   console.log(x.inspect());
  //   return x;
  // },
  R.compose(
    x => x.join(),
    R.map(pureLog)
  ),
  R.map(R.last),
  R.map(R.split('/'))
);

logFilename(getFile).join();
