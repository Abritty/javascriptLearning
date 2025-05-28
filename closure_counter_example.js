function createCounter() {
    let count = 0; // HIDDEN STATE
    
    function increment() {
        return ++count; // Increment and return the count
    }
    
    return {
        increment: increment // Expose the increment function
    };
}

const counter1 = createCounter();
const counter2 = createCounter();
console.log(counter1.increment()); // Output: 1
console.log(counter1.increment()); // Output: 2
console.log(counter2.increment()); // Output: 1