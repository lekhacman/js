const R = require('ramda');

const list = [
  {
    name: 'Le',
    active: true,
  },
  {
    name: 'Khac',
    active: false,
  },
  {
    name: 'Man',
    active: true,
  },
  {
    name: 'An',
    active: true,
  },
  {
    name: 'Drew',
    active: false,
  },
];

const transducer = R.compose(
  R.filter(R.prop('active')),
  R.map(R.prop('name'))
);

const result = R.into([], transducer)(list);
console.log(result);
