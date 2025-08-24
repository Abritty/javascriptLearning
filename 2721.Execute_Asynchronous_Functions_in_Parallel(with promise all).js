/**
 * @param {Array<Function>} functions
 * @return {Promise<any[]>}
 */
var executeFunctionsInParallel = async function(functions) {
    return Promise.all(functions.map(fn => fn()));
};

// Example usage:
const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 300)),
    () => new Promise(resolve => setTimeout(() => resolve(2), 200)),
    () => new Promise(resolve => setTimeout(() => resolve(3), 100))
]; 

executeFunctionsInParallel(functions).then(console.log); // Output: [1, 2, 3]