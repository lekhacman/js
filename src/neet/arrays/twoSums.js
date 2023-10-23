export default function twoSums(nums, target) {
  let firstId;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= target) {
      firstId = i;
      break;
    }
  }

  const subTarget = target - nums[firstId];
  const cache = [];
  for (let j = firstId + 1; j < nums.length; j++) {
    const currentNumber = nums[j];
    if (currentNumber === subTarget) {
      return [firstId, j];
    }

    if (currentNumber <= target) {
      cache.push([j, currentNumber]);
    }
  }

  return find(cache);

  function find(arr) {
    const remaining = [];
    const [firstId, firstValue] = arr[0];
    const subTarget = target - firstValue;
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      if (subTarget === current[1]) {
        return [firstId, current[0]];
      }

      remaining.push(arr[i]);
    }

    return find(remaining);
  }
}
