// object is a colleection of key value pairs
// object literals
// When there are more than one inner functions, then for returning a particular function,
// We have to use obejcts
var expect = function (val) {
  return {
    toBe: (otherVal) => {
      if (val === otherVal) return true;
      else throw new Error("Not Equal");
    },
    notToBe: (otherVal) => {
      if (val !== otherVal) return true;
      else throw new Error("Equal");
    },
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(10)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
