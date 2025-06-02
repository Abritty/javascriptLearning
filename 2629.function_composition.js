/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};

// Example usage:
const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // Output: 9
