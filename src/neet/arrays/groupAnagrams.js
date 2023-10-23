export default function groupAnagrams(strs) {
  const map = {};
  const result = [];
  strs.forEach(function(str) {
    const sorted = str
      .split('')
      .sort()
      .join('');
    if (map[sorted] !== undefined) {
      result[map[sorted]].push(str);
    } else {
      result.push([str]);
      map[sorted] = result.length - 1;
    }
  });
  return result;
}
