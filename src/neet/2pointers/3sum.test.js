import { threeSum } from "./3sum.js";

describe("3sum", () => {
  test.each([
    {
      input: [-1, 0, 1, 2, -1, -4],
      expected: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    { input: [0, 1, 1], expected: [] },
    { input: [0, 0, 0], expected: [[0, 0, 0]] },
    { input: [0,0,0,0], expected: [[0, 0, 0]] },
    {input: [-2,0,1,1,2], expected: [[-2,0,2], [-2,1,1]] },
    // {input: [2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10], expected: [] },
  ])("%#", function ({ input, expected }) {
    expect(threeSum(input)).toEqual(expected);
  });
});
