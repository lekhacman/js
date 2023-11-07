export default function containsDulicate(nums) {
  const set = {};
  return nums.some(function(item) {
    if (set[item]) {
      return true;
    }

    set[item] = true;
    return false;
  });
}

export function add(a, b) {
return a + b;
}
