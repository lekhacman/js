import { isPalindrome } from "./validPalindrome";

describe("valid palindrome", () => {
  test.each([
    // { input: "Was it a car or a cat I saw?", expected: true },
    // { input: "tab a cat", expected: false },
    { input: ".,", expected: false },
  ])("$input", function({ input, expected }) {
    expect(isPalindrome(input)).toBe(expected);
  });
});
