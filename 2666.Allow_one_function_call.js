// LeetCode Problem 2666: Allow One Function Call
// This function takes another function as input and ensures that it can only be called once.
// Subsequent calls to the function will return undefined.

function once(fn) {
    // Create a flag to track if the function has been called
    let called = false;

    // Return a new function that wraps the original function
    return function(...args) {
        if (!called) {
            // If the function hasn't been called yet, set the flag to true
            called = true;
            // Call the original function with the provided arguments
            return fn(...args);
        }
        // If the function has already been called, return undefined
        return undefined;
    };
}

// Example usage:
const add = (a, b) => a + b;
const addOnce = once(add);

console.log(addOnce(2, 3)); // Output: 5
console.log(addOnce(4, 5)); // Output: undefined