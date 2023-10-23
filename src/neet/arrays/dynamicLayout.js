export default function dynamicLayout(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCounter = {};
  const tCounter = {};

  for (let i = 0; i < s.length; i++) {
    doIt(sCounter, s[i]);
    doIt(tCounter, t[i]);
  }

  for (let char in sCounter) {
    if (sCounter[char] !== tCounter[char]) {
      return false;
    }
  }

  return true;

  function doIt(target, char) {
    if (target[char]) {
      return target[char]++;
    }

    target[char] = 1;
  }
}
