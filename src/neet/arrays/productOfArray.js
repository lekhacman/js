// https://leetcode.com/problems/product-of-array-except-self/
export default function productExceptSelf(nums) {
  const zeroIndexs = [];
  const product = nums.reduce(multiply, 1);
  if (zeroIndexs.length > 1) {
    return new Array(nums.length).fill(0);
  }

  if (zeroIndexs.length === 1) {
    const result = new Array(nums.length).fill(0);
    result[zeroIndexs[0]] = product;
    return result;
  }

  return nums.map(function(num) {
    return product / num;
  });

  function multiply(a, b, i) {
    if (b === 0) {
      zeroIndexs.push(i);
      return a;
    }

    return a * b;
  }
}
