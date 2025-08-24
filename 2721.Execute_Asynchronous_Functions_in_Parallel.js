/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const inputArrLen = functions.length;
    if (inputArrLen === 0) {
      resolve([]);
      return;
    }

    let res = Array(inputArrLen);
    let resolveCount = 0;

    for (let i = 0; i < inputArrLen; i++) {
      functions[i]()
        .then((result) => {
          res[i] = result;
          resolveCount++;

          if (resolveCount === inputArrLen) {
            resolve(res);
          }
        })
        .catch((err) => reject(err));
    }
  });
};

const functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(1), 300)),
  () => new Promise((resolve) => setTimeout(() => resolve(2), 200)),
  () => new Promise((resolve) => setTimeout(() => resolve(3), 100)),
  () => new Promise((reject) => setTimeout(() => reject("Error"), 150)),
];
// const functions = [];
const promise = promiseAll(functions);
promise.then(console.log); // [42]
