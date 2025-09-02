class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    valueOf() {
        return this.nums.reduce((sum, num) => sum + num, 0);
    }

    toString() {
        return `[${this.nums.join(',')}]`;
    }
}

// Test cases
const obj1 = new ArrayWrapper([1, 2, 3]);
const obj2 = new ArrayWrapper([4, 5, 6]);

console.log(obj1 + obj2); // Output: 21
console.log(String(obj1)); // Output: "[1,2,3]"
console.log(String(obj2)); // Output: "[4,5,6]"

const obj3 = new ArrayWrapper([]);
console.log(obj3 + obj1); // Output: 6
console.log(String(obj3)); // Output: "[]"
