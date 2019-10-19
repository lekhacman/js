module.exports = { triangle, triangleElement };

/**
 * Linear recursive process to compute triangle
 * @param x
 * @return {number[]}
 */
function triangle(x) {
  const result = [1];
  if (x === 1) {
    return result;
  }

  for (let i = 1; i < x - 1; i++) {
    const previousRow = triangle(x - 1);
    result.push(previousRow[i - 1] + previousRow[i]);
  }

  result.push(1);

  return result;
}

/**
 * Tree recursive
 * @param row
 * @param index
 * @return {*}
 */
function triangleElement(row, index) {
  if (index === 0 || index === row - 1) {
    return 1;
  }

  const aboveRow = row - 1;
  return (
    triangleElement(aboveRow, index - 1) + triangleElement(aboveRow, index)
  );
}
