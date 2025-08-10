const timeoutId = setTimeout(() => {
  console.log("Hello, world!");
}, 5000);

function clearTimeoutExample() {
  clearTimeout(timeoutId);
  console.log("Timeout cleared");
}

clearTimeoutExample();
// This will prevent the "Hello, world!" message from being logged
