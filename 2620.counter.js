function createCounter(n) {
    return function() {
        return n++; //return n first, then increment n
    };
}

// Example usage:
const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12