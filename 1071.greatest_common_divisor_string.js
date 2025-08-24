// Function to find the greatest common divisor of strings
function gcdOfStrings(str1, str2) {
    // If concatenation of the strings in both orders is not equal, there is no common divisor
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    // Use the greatest common divisor of lengths to find the GCD string
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const gcdLength = gcd(str1.length, str2.length);
    return str1.slice(0, gcdLength);
}

// Test cases
console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE")); // Output: ""
