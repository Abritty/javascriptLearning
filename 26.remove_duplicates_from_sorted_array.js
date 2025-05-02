function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let currentIndex = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[currentIndex] = nums[i];
      currentIndex++;
    }
  }

  return currentIndex;
}

// Example usage
const sortedArray = [1, 1, 2, 2, 3, 4, 4];
const newLength = removeDuplicates(sortedArray);
console.log(`New length: ${newLength}`);
console.log(`Modified array: ${sortedArray.slice(0, newLength)}`);
