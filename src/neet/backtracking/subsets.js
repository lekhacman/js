export default function subsets(nums) {
  const result = [[]];
  for (let num of nums) {
    const size = result.length;
    for (let i = 0; i < size; i++) {
      const subset = result[i].slice();
      subset.push(num);
      result.push(subset);
    }
  }
  return result;
}
