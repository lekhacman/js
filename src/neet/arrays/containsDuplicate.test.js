import containsDulicate from './containsDulicate';

describe('containsDuplicate', function() {
  test.each([
    { t: 'should handle empty', arr: [1, 2, 3.4], expected: false },
    { t: 'yes', arr: [1, 2, 3, 1], expected: true },
    {
      t: 'complicated',
      arr: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
      expected: true,
    },
  ])('$t', function({ arr, expected }) {
    expect(containsDulicate(arr)).toBe(expected);
  });
});
