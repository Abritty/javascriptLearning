// This function returns another function that always returns "Hello World"
const createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

// Call the createHelloWorld function
const helloWorldFunction = createHelloWorld();
console.log(helloWorldFunction(['a', []])); // Output: "Hello World"
