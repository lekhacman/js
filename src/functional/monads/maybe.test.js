import { maybe, Maybe } from './maybe';

const R = require('ramda');

test('Maybe', () => {
  const safeHead = xs => Maybe.of(xs[0]);

  const streetName = R.compose(
    R.map(R.prop('street')),
    safeHead,
    R.prop('addresses')
  );

  expect(streetName({ addresses: [] })).toEqual(Maybe.of(undefined));

  expect(
    streetName({ addresses: [{ street: 'Shenton Way', number: 6 }] })
  ).toEqual(Maybe.of('Shenton Way'));
});

describe('Bank', () => {
  const widthdraw = R.curry(function(amount, { balance }) {
    return Maybe.of(balance >= amount ? { balance: balance - amount } : null);
  });
  const remainingBalance = ({ balance }) => `Your balance is $${balance}`;
  const updateLedger = account => account;

  const finishTransaction = R.compose(
    remainingBalance,
    updateLedger
  );

  test('Explicit error', () => {
    const getTwenty = R.compose(
      R.map(finishTransaction),
      widthdraw(20)
    );

    expect(getTwenty({ balance: 200 })).toEqual(
      Maybe.of(remainingBalance({ balance: 180 }))
    );
    expect(getTwenty({ balance: 10 })).toEqual(Maybe.of(null));
  });

  test('maybe', () => {
    const msg = "You're broke!";
    const getTwenty = R.compose(
      maybe(msg, finishTransaction),
      widthdraw(20)
    );

    expect(getTwenty({ balance: 200 })).toEqual(
      remainingBalance({ balance: 180 })
    );
    expect(getTwenty({ balance: 10 })).toEqual(msg);
  });
});
