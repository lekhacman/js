const R = require("ramda");
const { Container, Maybe } = require("./maybe");

test("Container", () => {
  const c = Container.of(3);
  expect(c.map(x => x + 2)).toEqual(Container.of(5));
});

test("Maybe", () => {
  const safeHead = xs => Maybe.of(xs[0]);

  const streetName = R.compose(
    R.map(R.prop("street")),
    safeHead,
    R.prop("addresses")
  );

  expect(streetName({ addresses: [] })).toEqual(Maybe.of(undefined));

  expect(
    streetName({ addresses: [{ street: "Shenton Way", number: 6 }] })
  ).toEqual(Maybe.of("Shenton Way"));
});

test("Explicit error", () => {
  const widthdraw = R.curry(function(amount, { balance }) {
    return Maybe.of(balance >= amount ? { balance: balance - amount } : null);
  });

  const updateLedger = account => account;

  const remainingBalance = ({ balance }) => `Your balance is $${balance}`;

  const finishTransaction = R.compose(
    remainingBalance,
    updateLedger
  );

  const getTwenty = R.compose(
    R.map(finishTransaction),
    widthdraw(20)
  );

  expect(getTwenty({ balance: 200 })).toEqual(
    Maybe.of(remainingBalance({ balance: 180 }))
  );
  expect(getTwenty({ balance: 10 })).toEqual(Maybe.of(null));
});
