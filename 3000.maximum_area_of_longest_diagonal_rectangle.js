/**
 * @param {number[][]} dimensions
 * @return {number}
 */

var areaOfMaxDiagonal = function (dimensions) {
  let maxDiagonal = 0;
  let maxArea = 0;

  for (const [width, height] of dimensions) {
    const diagonal = Math.sqrt(width * width + height * height);
    if (diagonal > maxDiagonal) {
      maxDiagonal = diagonal;
      maxArea = width * height;
    }
    else if (diagonal === maxDiagonal) {
      maxArea = Math.max(maxArea, width * height);
    }
  }
  return maxArea;
};
// Example usage
const dimensions = [
  [3, 4],
  [5, 12],
  [8, 15],
  [21, 20],
  [20, 21],
];

console.log(areaOfMaxDiagonal(dimensions));
