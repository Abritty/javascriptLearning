/**
 * LeetCode 1768: Merge Strings Alternately
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let merged = "";
  let i = 0;
  let len1 = word1.length;
  let len2 = word2.length;

  while (i < len1 || i < len2) {
    if (i < len1) merged += word1[i];
    if (i < len2) merged += word2[i];
    i++;
  }

  return merged;
};
console.log(mergeAlternately("abc", "123")); //output: "a1b2c3"
console.log(mergeAlternately("ab", "123")); //output: "a1b23"
console.log(mergeAlternately("abcd", "12")); //output: "a1b2cd"
