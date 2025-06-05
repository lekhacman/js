import Trie from "./Trie";

describe("Trie", function () {
  it.each([
    {
      input: {
        ops: ["insert", "search", "search", "startsWith", "insert", "search", "search"],
        params: [["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"], ["apple"]],
      },
      expected: [null, true, false, true, null, true, true],
    },
  ])("#%# should ", function ({ input: { ops, params }, expected }) {
    const trie = new Trie();

    ops.forEach((op, id) => {
      expect(trie[op].apply(trie, params[id])).toBe(expected[id]);
    });
  });
});
1;
