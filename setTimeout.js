/**
 * Demonstrates the usage of `setTimeout` to execute a function after a specified delay.
 * 
 * The `setTimeout` function takes two parameters:
 * 
 * @param {Function} callback - The function to be executed after the delay.
 * @param {number} delay - The time, in milliseconds, to wait before executing the callback function.
 * 
 * In this example:
 * - The callback logs a message to the console.
 * - The delay is set to 2000 milliseconds (2 seconds).
 */
// Example of using setTimeout
console.log("Start");

setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);

console.log("End");