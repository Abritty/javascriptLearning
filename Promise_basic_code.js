const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task");
    resolve();
  }, 5000);
});

myPromise.then(function () {
  console.log("Promise is resolved");
});

const anotherPromise = new Promise(function (resolve, reject) {
  const success = Math.random() > 0.5; // Randomly decide success or failure
  if (success) {
    resolve("Operation succeeded!");
    } else {
    reject("Operation failed!");
  }
});

anotherPromise
  .then(function (message) {
    console.log("Resolved:", message);
  })
  .catch(function (error) {
    console.log("Rejected:", error);
  });
