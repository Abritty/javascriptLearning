/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) { // Check if enough arguments have been provided
            // If so, call the original function with those arguments
            return fn(...args);
        }
        // We have to return a function that can take more arguments
        // passing the first time arguments with the rest of the arguments
        return (...nextArgs) => curried(...args, ...nextArgs); // Recursively collect arguments
    };
};

// Example usage:
function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 4)(3)); // Output: 6
console.log(curriedAdd(1, 9, 3)); // Output: 6