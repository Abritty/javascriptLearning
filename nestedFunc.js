// JS allows defining a func inside another func. The nested func is a closure,
// meaning it has access to the outer func's vars even after the outer func has returned.

function outerFunc(x) {
  function innerFunc(y) {
    return x + y;
  }

  return innerFunc;
}

const outerResult = outerFunc(5);

const result = outerResult(2);

console.log(result); // Output: 7
// In the above example, the innerFunc has access to the x variable from the outerFunc.
// The innerFunc is returned from the outerFunc and stored in the outerResult variable.
// The outerResult variable is a closure that has access to the x variable from the outerFunc.
// When the outerResult is called with 2, it adds 2 to the x variable (5) and returns 7.
// The result is then logged to the console.
//