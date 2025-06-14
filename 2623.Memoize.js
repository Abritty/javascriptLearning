/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  //   const cache = new Map();
  //   return function (...args) {
  //     const key = JSON.stringify(args);
  //     if (cache.has(key)) {
  //       return cache.get(key);
  //     }
  //     const result = fn(...args);
  //     cache.set(key, result);
  //     return result;
  //   };
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Example function to memoize
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(0, 0); // 5
memoizedFn(0, 0); // 5
console.log(callCount); // 1
// Call the memoized function
// console.log(memoizedAdd(2, 3)); // Output: 5
// console.log(memoizedAdd(2, 3)); // Output: 5 (retrieved from cache)
// console.log(memoizedAdd(4, 5)); // Output: 9
