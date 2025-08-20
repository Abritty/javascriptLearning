/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    };
};

// Example usage:
const log = debounce(console.log, 1000);
log("Hello");
log("World");
// After 1 second, it will log "World" to the console, not "Hello".
