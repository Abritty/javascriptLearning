/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let accumulator = init;
    for (let i = 0; i < nums.length; i++) {
        accumulator = fn(accumulator, nums[i]);
    }
    return accumulator;
};

// Example usage:
const nums = [1, 2, 3, 4];
const fn = (acc, curr) => acc + curr;
const init = 0;

console.log(reduce(nums, fn, init)); // Output: 10