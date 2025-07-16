const promise = new Promise(callback);

promise
  .then(() => {
    console.log("Promise resolved successfully!");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise settled (either resolved or rejected).");
  }
);

function callback(resolve, reject) {
  // single threaded
//   setTimeout(() => resolve(), 1000);

  reject('Error occurred!');
}
