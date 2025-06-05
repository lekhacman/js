import invertTree, { TreeNode } from "./invertTree";

describe("invertTree", function () {
  it.each([
    { root: [4, 2, 7, 1, 3, 6, 9], expected: [4, 7, 2, 9, 6, 3, 1] },
    { root: [2, 1, 3], expected: [2, 3, 1] },
    { root: [], expected: [] },
  ])("#%# should invert $root", function ({ root, expected }) {
    expect(invertTree(TreeNode.rootOf(root))).toEqual(
      TreeNode.rootOf(expected),
    );
  });
});
