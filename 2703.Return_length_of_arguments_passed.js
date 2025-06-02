// Here the time complexity is O(1), beacause the length is stored in the arguments object, 
// and we are just returning that length.
/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

// Example usage:
console.log(argumentsLength(1, 2, 3)); // Output: 3
console.log(argumentsLength()); // Output: 0
console.log(argumentsLength(5, 6, 7, 8, 9)); // Output: 5