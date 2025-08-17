class TimeLimitedCache {
  constructor() {
    // Initialize the cache as a Map to store key-value pairs with expiration
    this.cache = new Map();
  }
  set(key, value, duration) {
    const alreadyExists = this.cache.get(key);
    if (alreadyExists) {
      clearTimeout(alreadyExists.timeOutId); // clear the previous timeout if it exists
    }
    const timeOutId = setTimeout(() => {
      this.cache.delete(key); // remove the key after duration
    }, duration);

    this.cache.set(key, { value, timeOutId });
    return Boolean(alreadyExists);
  }
  get(key) {
    // Returns the value associated with the key if it exists and hasn't expired
    // If the key does not exist or has expired, return -1
    if (this.cache.has(key)) {
      return this.cache.get(key).value; // return the value if the key exists
    }
    return -1; // key does not exist or has expired
  }
  // Returns the count of non-expired keys
  count() {
    // Returns the count of non-expired keys
    return this.cache.size;
  }
}

const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000); // false
const result = timeLimitedCache.get(1); // 42
console.log(result); // 42
console.log(timeLimitedCache.count()); // 1
