import subsets from "./subsets";

describe("subsets", function () {
  it.each([
    {
      nums: [1, 2, 3],
      expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
    },
    { nums: [0], expected: [[], [0]] },
  ])("#%# should backtrack", function ({ nums, expected }) {
    expect(subsets(nums)).toEqual(expected);
  });
});
1;
