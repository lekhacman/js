// https://leetcode.com/problems/longest-consecutive-sequence/
export default function longestConsecutive(nums) {
  const numMap = {};
  nums.forEach(num => {
    numMap[num] = true;
  });
  const exploredNums = {};

  let longest = 0;
  nums.forEach(explore);
  return longest;

  function explore(num) {
    if (exploredNums[num]) {
      return;
    }

    let counter = 1;
    let left = num - 1;
    while (numMap[left]) {
      exploredNums[numMap[left]] = true;
      counter++;
      left--;
    }

    let right = num + 1;
    while (numMap[right]) {
      exploredNums[numMap[right]] = true;
      counter++;
      right++;
    }

    if (counter > longest) {
      longest = counter;
    }
  }
}
