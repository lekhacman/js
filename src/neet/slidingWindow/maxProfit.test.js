import maxProfit from "./maxProfit";

describe("maxProfit", () => {
  it.each([
    { input: [7, 1, 5, 3, 6, 4], expected: 5 },
    { input: [7, 6, 4, 3, 1], expected: 0 },
    { input: [7, 2, 5, 1, 3], expected: 3 },
  ])("#%# profit = $expected", function ({ input, expected }) {
    expect(maxProfit(input)).toEqual(expected);
  });
});
