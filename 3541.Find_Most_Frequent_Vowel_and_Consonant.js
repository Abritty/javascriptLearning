function maxFreqSum(s) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const freq = {};

  for (const ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  let maxVowel = 0;
  let maxConsonant = 0;

  for (const ch in freq) {
    const count = freq[ch];
    if (vowels.has(ch)) {
      maxVowel = Math.max(maxVowel, count);
    } else {
      maxConsonant = Math.max(maxConsonant, count);
    }
  }

  return maxVowel + maxConsonant;
}

// Example usage:
const input = "Successes";
const result = maxFreqSum(input);
console.log(result);
