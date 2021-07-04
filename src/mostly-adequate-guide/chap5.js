const R = require('ramda');

const cars = [
  {
    name: 'Aston Martin One-77',
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true,
  },
];

const isLastInSTock = R.compose(
  R.prop('in_stock'),
  R.last
);

console.log(isLastInSTock(cars));

const average = xs => R.reduce(R.add, 0, xs) / xs.length;

const averageDollarValue = R.compose(
  average,
  R.map(R.prop('dollar_value'))
);
