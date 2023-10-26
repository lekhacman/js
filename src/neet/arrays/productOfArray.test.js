import productExceptSelf from './productOfArray';

describe('Product of array except self', function() {
  it.each([
    { nums: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
    { nums: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0] },
    { nums: [0, 0], expected: [0, 0] },
  ])('$nums', function({ nums, expected }) {
    expect(productExceptSelf(nums)).toEqual(expected);
  });
});
