/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
  if (!obj) {
    return obj;
  }

  if (typeof obj !== "object") {
    // Check for string or integer
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }

  const result = {};
  for (const key in obj) {
    const value = compactObject(obj[key]);
    if (value) {
      result[key] = value;
    }
  }
  return result;
};

// Test cases
const testCases = [
  {
    input: [null, 0, false, 1],
    expected: [1],
  },
  {
    input: { a: null, b: [false, 1], c: { d: 0, e: "test" } },
    expected: { b: [1], c: { e: "test" } },
  },
  {
    input: [false, null, { a: 0, b: null, c: 2 }],
    expected: [{ c: 2 }],
  },
];

testCases.forEach(({ input, expected }, index) => {
  const result = compactObject(input);
  console.log(
    `Test Case ${index + 1}:`,
    JSON.stringify(result) === JSON.stringify(expected) ? "Passed" : "Failed",
  );
});
