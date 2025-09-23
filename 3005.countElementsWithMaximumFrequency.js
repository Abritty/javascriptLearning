function maxFrequencyElements(nums) {
  const frequencies = new Map();
  let maxFrequency = 0;
  let totalFrequencies = 0;

  for (const num of nums) {
    const frequency = (frequencies.get(num) || 0) + 1;
    frequencies.set(num, frequency);

    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      totalFrequencies = frequency;
    } else if (frequency === maxFrequency) {
      totalFrequencies += frequency;
    }
  }

  return totalFrequencies;
}

// Example usage:
const nums1 = [1, 2, 2, 3, 1, 4];
console.log(maxFrequencyElements(nums1)); // Output: 4

const nums2 = [1, 2, 3, 4, 5];
console.log(maxFrequencyElements(nums2)); // Output: 5
