/**
 * Filters elements from an array based on a filtering function.
 *
 * @param {number[]} arr - The array to filter.
 * @param {Function} fn - The filtering function.
 * @returns {number[]} - The filtered array.
 */
function filter(arr, fn) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

var filter2 = function (arr, fn) {
  return arr.filter(fn);
};

// Example usage:
const arr = [1, 2, 3, 4, 5];
const fn = (num, index) => num % 2 === 0; // Filter even numbers
console.log(filter(arr, fn)); // Output: [2, 4]
console.log(filter2(arr, fn)); // Output: [2, 4]
