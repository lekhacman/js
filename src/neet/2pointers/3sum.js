export function threeSum(nums) {
  const sorted = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i <= sorted.length; i++) {
    const num = sorted[i];
    if (num > 0) {
      break;
    }
    if (i > 0 && num === sorted[i - 1]) {
      continue;
    }

    let l = i + 1,
      r = sorted.length - 1;

    while (l < r) {
      const sum = num + sorted[l] + sorted[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        result.push([num, sorted[l], sorted[r]]);
        l++;
        r--;
        while (l < r && sorted[l] === sorted[l - 1]) {
          l++;
        }
      }
    }
  }
  return result;
}
