// Example 1: Filter out even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Filter out numbers greater than 5
const greaterThanFive = numbers.filter(num => num > 5);
console.log('Numbers Greater Than 5:', greaterThanFive); // Output: [6, 7, 8, 9, 10]

// Example 3: Filter out numbers less than or equal to 3
const lessThanOrEqualToThree = numbers.filter(num => num <= 3);
console.log('Numbers Less Than or Equal to 3:', lessThanOrEqualToThree); // Output: [1, 2, 3]

// Example 4: Filter out odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log('Odd Numbers:', oddNumbers); // Output: [1, 3, 5, 7, 9]

// Example 5: Filter out numbers divisible by 3
const divisibleByThree = numbers.filter(num => num % 3 === 0);
console.log('Numbers Divisible by 3:', divisibleByThree); // Output: [3, 6, 9]
// Example 6: Filter out numbers at even indices
const numbersAtEvenIndices = numbers.filter((_, index) => index % 2 === 0);
console.log('Numbers at Even Indices:', numbersAtEvenIndices); // Output: [1, 3, 5, 7, 9]