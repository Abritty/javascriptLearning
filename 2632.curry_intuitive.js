/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  let nums = [];
  return function curried(...args) {
    nums  = [...nums, ...args];
    if (nums.length === fn.length) {
      const result = fn(...nums);
      nums = []; // Reset nums for future calls
      return result;
    }
    return curried;
}

};

// Example usage:
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 4)(3)); // Output: 6
console.log(curriedAdd(1, 9, 3)); // Output: 6
