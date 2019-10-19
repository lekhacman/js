const a = require('./ackermann');

describe('Ackermann', () => {
  test("Ackermann's function", () => {
    const cases = [
      {
        x: 1,
        y: 0,
        expect: 0,
      },
      {
        x: 0,
        y: 4,
        expect: 8,
      },
      {
        x: 3,
        y: 1,
        expect: 2,
      },
      // {
      //     x: 1,
      //     y: 10,
      //     expect: 3
      // },
      // {
      //     x: 2,
      //     y: 4,
      //     expect: 2
      // },
      // {
      //     x: 3,
      //     y: 3,
      //     expect: 3
      // }
    ];

    cases.forEach(c => {
      // expect(a.ackermann(c.x, c.y)).toEqual(c.expect);
      expect(a.ackermann(c.x, c.y)).toEqual(a.ack(c.x, c.y));
    });
  });
});
