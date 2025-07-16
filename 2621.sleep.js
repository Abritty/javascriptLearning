/**
 * LeetCode 2621: Sleep
 * Write an asynchronous function that pauses execution for a given number of milliseconds.
 */

/**
 * Sleep function that returns a promise resolved after `ms` milliseconds.
 * @param {number} ms - The number of milliseconds to sleep.
 * @returns {Promise<void>}
 */
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


 let t = Date.now()
 sleep(100).then(() => console.log(Date.now() - t)) // 100

