// https://leetcode.com/problems/top-k-frequent-elements/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]} */
export default function topKFrequent(nums, k) {
  const freqMap = {};
  nums.forEach(function(num) {
    if (freqMap[num] === undefined) {
      freqMap[num] = 0;
    }

    freqMap[num]++;
  });
  const arr = [];
  for (const num in freqMap) {
    arr[freqMap[num]] = num;
  }

  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(parseInt(arr.pop(), 10));
  }

  return result;
}
