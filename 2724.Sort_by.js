/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

const arr1 = [5, 4, 1, 2, 3];
const fn1 = (x) => x;

const sortedArr1 = sortBy(arr1, fn1);
console.log(sortedArr1);
// Expected Output: [1, 2, 3, 4, 5]

const arr2 = [{ x: 1 }, { x: 0 }, { x: -1 }];
const fn2 = (d) => d.x;

const sortedArr2 = sortBy(arr2, fn2);
console.log(sortedArr2);
// Expected Output: [{"x": -1}, {"x": 0}, {"x": 1}]
