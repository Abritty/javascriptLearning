/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  // t is the timeout threashold
  // Return a new Promise
  return async function (...args) {
    return new Promise(async(resolve, reject) => {
      // Set a timeout to reject the promise after t millisecond
      const id = setTimeout(() => reject("Time Limit Exceeded"), t);

      try {
        const res = await fn(...args); // Call the function fn with the provided arguments
        resolve(res); // If fn resolves, resolve the promise
      } catch (err) {
        reject(err); // If fn rejects, reject the promise
      } // Clear the timeout regardless of the outcome  
    });
  };
};

function fn(responseTime) {
  return new Promise((res) => setTimeout(res, responseTime));
}

const t = 100; // 100 milliseconds
const limited = timeLimit(fn, t);

limited(50).then(console.log);
limited(150).catch(console.log);
