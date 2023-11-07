import longestConsecutive from './longestConsecutive';

describe('longestConsecutive', function() {
  test.each([
    { nums: [100, 4, 200, 1, 3, 2], expected: 4 },
    { nums: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9 },
  ])('$nums', function({ nums, expected }) {
    expect(longestConsecutive(nums)).toBe(expected);
  });
});
