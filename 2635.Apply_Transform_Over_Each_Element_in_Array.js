/**
 * Applies a transformation function to each element in the array.
 *
 * @param {number[]} arr - The input array of integers.
 * @param {Function} fn - The mapping function to apply to each element.
 * @returns {number[]} A new array with the transformation applied.
 */
// Strategy design pattern
function applyTransform(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
}

var map = function (arr, fn) {
  return arr.map(fn);
};

// Example usage:
const arr = [1, 2, 3, 4];
const fn = (value, index) => value * index;
const transformedArray = applyTransform(arr, fn);
console.log(transformedArray); // Output: [0, 2, 6, 12]
console.log(map(arr, fn)); // Output: [0, 2, 6, 12]
