import dynamicLayout from './dynamicLayout';

describe('dynamicLayout', function() {
  test.each([
    { inputs: ['anagram', 'nagaram'], expected: true },
    { inputs: ['rat', 'car'], expected: false },
  ])('($inputs.0, $inputs.1)', function({ inputs, expected }) {
    expect(dynamicLayout(...inputs)).toBe(expected);
  });
});
