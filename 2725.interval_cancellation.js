/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

var cancellable = function (fn, args, t) {
  fn(...args); // Call the function immediately
  const timer = setInterval(() => {
    fn(...args); // Call the function at intervals
  }, t);
  let cancelFn = () => clearInterval(timer); // Function to cancel the interval
  return cancelFn;
};

//test
const result = [];
const fn = (x) => x * 2;
const args = [4],
  t = 35,
  cancelTimeMs = 190;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

setTimeout(cancel, cancelTimeMs);
setTimeout(
  () => {
    console.log(result);
  },
  cancelTimeMs + t + 15,
);

//result
// [
//   { time: 0, returned: 8 },
//   { time: 36, returned: 8 },
//   { time: 72, returned: 8 },
//   { time: 108, returned: 8 },
//   { time: 144, returned: 8 },
//   { time: 180, returned: 8 },
// ];
