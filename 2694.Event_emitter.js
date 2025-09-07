class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);

    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (cb) => cb !== callback,
        );
        if (this.events[eventName].length === 0) {
          delete this.events[eventName];
        }
      },
    };
  }

  emit(eventName, args = []) {
    if (!this.events[eventName]) {
      return [];
    }

    return this.events[eventName].map((callback) => callback(...args));
  }
}

// Example usage:
const emitter = new EventEmitter();

const sub1 = emitter.subscribe("event1", (x) => x + 1);
const sub2 = emitter.subscribe("event1", (x) => x * 2);

console.log(emitter.emit("event1", [5])); // [6, 10]

sub1.unsubscribe();

console.log(emitter.emit("event1", [5])); // [10]
