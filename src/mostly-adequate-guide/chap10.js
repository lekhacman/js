const R = require('ramda');
const S = require('sanctuary');

console.log(
  R.pipe(
    R.map(R.add),
    a => R.ap(a, [3]),
    R.head
  )([2])
);

console.log(
  R.pipe(
    R.map(R.add),
    R.flip(R.ap)(R.of(3))
  )(R.of(2))
);

console.log(R.pipe(R.ap(R.of(R.add(3))))(R.of(2)));

console.log(
  R.pipe(
    S.ap(S.Just(2)),
    S.ap(S.Just(3))
  )(S.Just(S.add))
);
