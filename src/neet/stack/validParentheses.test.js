import { validParentheses } from "./validParentheses.js";

describe("Valid parentheses", () => {
  test.each([
    { input: "()", expected: true },
    { input: "()[]{}", expected: true },
    { input: "()[]{}", expected: true },
    { input: "(]", expected: false },
    { input: "([])", expected: true },
    { input: ")", expected: false },
  ])("$input", ({ input, expected }) => {
    expect(validParentheses(input)).toEqual(expected);
  });
});
