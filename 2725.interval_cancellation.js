/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

var cancellable = function (fn, args, t) {
  fn(...args);
  const timer = setInterval(() => {
    fn(...args);
  }, t);
  let cancelFn = () => clearInterval(timer);
  return cancelFn;
};

function exampleFunction(a) {
  console.log(a * 2);
}

const cancel = cancellable(exampleFunction, [4], 35);
setTimeout(cancel, 190);
