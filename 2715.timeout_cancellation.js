// LeetCode 2715: Timeout Cancellation
function cancellable(fn, args, t) {
  const timeoutId = setTimeout(() => fn(...args), t);
  return () => clearTimeout(timeoutId);
}

// Example usage
function exampleFunction(a) {
  console.log(a * 5);
}

const cancel = cancellable(exampleFunction, [2], 2000);
setTimeout(cancel, 1000);

