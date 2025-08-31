/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((grouped, item) => {
    const key = fn(item);
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
    return grouped;
  },{});
};

const array1 = [1, 2, 3];
const fn1 = function (n) {
  return String(n > 1);
};

const result1 = array1.groupBy(fn1);
console.log(result1);
// Expected Output: { 'false': [ 1 ], 'true': [ 2, 3 ] }

const array2 = [{ id: "1" }, { id: "1" }, { id: "2" }];
const fn2 = function (item) {
  return item.id;
};

const result2 = array2.groupBy(fn2);
console.log(result2);
// Expected Output: { '1': [ { id: '1' }, { id: '1' } ], '2': [ { id: '2' } ] }
