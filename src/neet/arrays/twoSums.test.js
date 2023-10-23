import twoSums from './twoSums';

describe('twoSums', function() {
  test.each([
    // { inputs: [[2, 7, 11, 15], 9], expected: [0, 1] },
    // { inputs: [[3, 2, 4], 6], expected: [1, 2] },
    // { inputs: [[3, 3], 6], expected: [0, 1] },
    // { inputs: [[1, 2, 1, 3, 1, 2, 3], 6], expected: [3, 6] },
    { inputs: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
  ])('($inputs)', function({ inputs, expected }) {
    const [nums, target] = inputs;
    expect(twoSums(nums, target)).toEqual(expected);
  });
});
