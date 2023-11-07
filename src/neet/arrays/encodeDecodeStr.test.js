import { decode, encode } from './encodeDecodeStr';

describe('Encode strings', function() {
  it.each([
    {
      input: ['lint', 'code', 'love', 'you'],
      expected: 'lint:;code:;love:;you',
    },
  ])('encode($input)', function({ input, expected }) {
    expect(encode(input)).toBe(expected);
  });
});

describe('Decode strings', function () {
  it.each([
    {
      input: 'lint:;code:;love:;you',
      expected: ['lint', 'code', 'love', 'you'],
    },
  ])('decode($input)', function({ input, expected }) {
    expect(decode(input)).toEqual(expected);
  });
});
