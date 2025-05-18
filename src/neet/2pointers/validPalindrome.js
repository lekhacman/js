export function isPalindrome(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    let a = s[i].toUpperCase();
    let b = s[j].toUpperCase();

    while (!isAlphanumeric(a) && i < j) {
      i++;
      a = s[i].toUpperCase();
    }
    while (!isAlphanumeric(b) && i < j) {
      j--;
      b = s[j].toUpperCase();
    }

    if (a !== b) {
      return false;
    }
  }
  return true;
}
function isAlphanumeric(c) {
  const code = c.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 65 && code <= 90);
}
