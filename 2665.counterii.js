/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let value = init;
  const increment = () => ++value;
  const decrement = () => --value;
  const reset = () => {
    value = init;
    return value;
  };

  return {
    increment,
    decrement,
    reset,
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
