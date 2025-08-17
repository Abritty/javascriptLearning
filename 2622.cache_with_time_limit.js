var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  // stores the key-value pair with expiration time
  // if the key alreasy exists and hadn't expired update it with time & return true
  // if the key does not exist or exists but expired return false
  // The default task is to set the key with value and expiration time
  const alreadyExists = this.cache.get(key);
  if (alreadyExists) {
    clearTimeout(alreadyExists.timeOutId); // clear the previous timeout if it exists
  }

  const timeOutId = setTimeout(() => {
    this.cache.delete(key); // remove the key after duration
  }, duration);

  this.cache.set(key, { value, timeOutId });
//   this.cache.set(key, value, timeOutId);
//   console.log(this.cache);
  return alreadyExists ? true : false; // return true if the key already existed, false otherwise
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  // returns the value associated with the key if it exists and hasn't expired
  // if the key does not exist or has expired return -1
  if (this.cache.has(key)) {
    return this.cache.get(key).value; // return the value if the key exists
  }
  return -1; // key does not exist or has expired
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size; // returns the count of non-expired keys
};

const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000); // false
const result = timeLimitedCache.get(1); // 42
console.log(result); // 42
console.log(timeLimitedCache.count()); // 1
