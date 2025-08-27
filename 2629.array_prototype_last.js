/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  const pos = this.length - 1;
  if (pos < 0) {
    return -1;
  }
  return this[pos];
};

const arr = [1, 2, 3];
const err = [];
console.log(arr.last()); // 3
console.log(err.last());
