import groupAnagrams from './groupAnagrams';

describe('Group Anagrams', function() {
  test.each([
    {
      strs: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
      expected: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']],
    },
    { strs: [''], expected: [['']] },
    { strs: ['a'], expected: [['a']] },
  ])('$strs', function({ strs, expected }) {
    expect(groupAnagrams(strs)).toEqual(expected);
  });
});
