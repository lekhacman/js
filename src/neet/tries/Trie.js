export default function Trie() {
  this.tree = {};
}

/**
 * @param {string} word
 * @return {null}
 */
Trie.prototype.insert = function (word) {
  let node = this.tree;
  for (let i = 0; i < word.length; i++) {
    if (!node[word[i]]) {
      node[word[i]] = {};
    }
    node = node[word[i]];
  }
  node.eof = true;
  return null;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.tree;
  for (let i = 0; i < word.length; i++) {
    if (!node[word[i]]) {
      return false;
    }
    node = node[word[i]];
  }
  return !!node.eof;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.tree;
  for (let i = 0; i < prefix.length; i++) {
    if (!node[prefix[i]]) {
      return false;
    }
    node = node[prefix[i]];
  }
  return true;
};
