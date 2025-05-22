const map = {
  ")": "(",
  "]": "[",
  "}": "{",
};
const set = new Set(Object.values(map));
export function validParentheses(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      stack.push(s[i]);
    } else if (map[s[i]] && map[s[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}
