function add(...x) {
  return x.reduce((acc, curr) => acc + curr, 0);
}
// higher order function
// This function takes another function as input and returns a memoized version of it.
// The memoized function caches results to avoid redundant calculations.
const memo = (func) => {
  let cache = {};
  return function (...x) {
    const key = JSON.stringify([...x].sort());
    // { '[1,2,3,4]': 10, '[10,20,30,40]': 100 }
    if (cache[key]) {
      console.log('Cache hit for:', key);
      return cache[key];
    } else {
      console.log('Cache miss for:', key);
      const result = func(...x);
      cache[key] = result;
      return result;
    }
  };
};

const calculate = memo(add);
// Example usage:
console.log(calculate(1, 2, 3, 4)); // Output: 15
console.log(calculate(1, 2, 4, 3)); // Output: 15
console.log(calculate(10, 20, 30, 40)); // Output: 40
console.log(calculate(1, 2, 3, 4));
