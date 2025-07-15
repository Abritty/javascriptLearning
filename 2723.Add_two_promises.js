/**
 * @param {Promise<number>} promise1
 * @param {Promise<number>} promise2
 * @return {Promise<number>}
 */

// Wait for both promises to resolve.
// Add their resolved values.
// Return a promise that resolves with the sum.
var addTwoPromises = async function (promise1, promise2) {
  const [value1, value2] = await Promise.all([promise1, promise2]);
  return value1 + value2;
};

// Example usage:
// const promise1 = Promise.resolve(2);
// const promise2 = Promise.resolve(3);

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(3), 20));

addTwoPromises(promise1, promise2).then((result) => {
  console.log(result); // Output: 5
});
