// Example of using the JavaScript reduce function

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of the array
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Sum of numbers:", sum);

// Using reduce to find the maximum value in the array
const max = numbers.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
}, numbers[0]);

console.log("Maximum value:", max);

// Using reduce to group objects by a property
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
];

const groupedByAge = people.reduce((accumulator, person) => {
    if (!accumulator[person.age]) {
        accumulator[person.age] = [];
    }
    accumulator[person.age].push(person);
    return accumulator;
}, {});

console.log("Grouped by age:", groupedByAge);