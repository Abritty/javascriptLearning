/**
 * @param {any[]} arr
 * @return {any[]}
 */
var flat = function(arr, n) {
    const result = [];

    function helper(arr, depth){
      for(const item of arr){
        if(Array.isArray(item) && depth < n){
          helper(item, depth + 1);
        } else {
          result.push(item);
        }
      }
      return result;
    }

    return helper(arr, 0);
};

// Example usage:
const nestedArray = [1, [2, [3, [4, [5]]]]];
const depth = 2;
const result = flat(nestedArray, depth);
console.log(result); // Output: [1, 2, 3, [4, [5]]]
