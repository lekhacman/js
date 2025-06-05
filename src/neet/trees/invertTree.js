export default function invertTree(root) {
  return swap(root);

  function swap(node) {
    if (node.left && node.right) {
      const left = swap(node.right);
      node.right = swap(node.left);
      node.left = left;
    }
    return node;
  }
}

export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

TreeNode.rootOf = function (list) {};
