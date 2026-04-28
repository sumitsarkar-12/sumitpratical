/**
 * JavaScript Essentials - Common Patterns & Utilities
 * Modern JavaScript (ES6+) with practical examples
 */

// ============================================
// 1. ARRAY METHODS & OPERATIONS
// ============================================

// Map - Transform each element
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10]

// Filter - Keep elements that match condition
const evens = numbers.filter(n => n % 2 === 0);
console.log('Evens:', evens); // [2, 4]

// Reduce - Accumulate into single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('Sum:', sum); // 15

// Find - Get first matching element
const firstEven = numbers.find(n => n % 2 === 0);
console.log('First even:', firstEven); // 2

// Some - Check if ANY element matches
const hasEven = numbers.some(n => n % 2 === 0);
console.log('Has even:', hasEven); // true

// Every - Check if ALL elements match
const allPositive = numbers.every(n => n > 0);
console.log('All positive:', allPositive); // true

// Flat - Flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
const flattened = nested.flat(2); // Depth of 2
console.log('Flattened:', flattened); // [1, 2, 3, 4, 5, 6]

// FlatMap - Map then flatten
const mapped = numbers.flatMap(n => [n, n * 2]);
console.log('FlatMapped:', mapped); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// ============================================
// 2. OBJECT METHODS & OPERATIONS
// ============================================

const user = {
  name: 'John',
  email: 'john@example.com',
  age: 30,
  city: 'New York'
};

// Object.keys - Get all property names
const keys = Object.keys(user);
console.log('Keys:', keys); // ['name', 'email', 'age', 'city']

// Object.values - Get all property values
const values = Object.values(user);
console.log('Values:', values); // ['John', 'john@example.com', 30, 'New York']

// Object.entries - Get key-value pairs
const entries = Object.entries(user);
console.log('Entries:', entries); // [['name', 'John'], ['email', '...'], ...]

// Object.assign - Merge objects
const defaults = { role: 'user', active: true };
const merged = Object.assign({}, defaults, user);
console.log('Merged:', merged);

// Spread operator - Merge objects (shallow copy)
const spread = { ...defaults, ...user };
console.log('Spread:', spread);

// Object.freeze - Make object immutable
const frozen = Object.freeze({ x: 1, y: 2 });
// frozen.x = 2; // This will be ignored in non-strict mode

// ============================================
// 3. STRING METHODS
// ============================================

const text = '  Hello World  ';

// Trim - Remove whitespace
console.log(text.trim()); // 'Hello World'

// ToUpperCase / ToLowerCase
console.log(text.toUpperCase()); // '  HELLO WORLD  '
console.log(text.toLowerCase()); // '  hello world  '

// Includes - Check if substring exists
console.log('Hello World'.includes('World')); // true

// StartsWith / EndsWith
console.log('Hello World'.startsWith('Hello')); // true
console.log('Hello World'.endsWith('World')); // true

// Replace - Replace first occurrence
console.log('Hello World'.replace('World', 'JavaScript')); // 'Hello JavaScript'

// ReplaceAll - Replace all occurrences
console.log('Hello Hello'.replaceAll('Hello', 'Hi')); // 'Hi Hi'

// Split - Convert string to array
console.log('a,b,c'.split(',')); // ['a', 'b', 'c']

// Join - Convert array to string
console.log(['a', 'b', 'c'].join('-')); // 'a-b-c'

// Slice - Extract portion
console.log('Hello'.slice(1, 4)); // 'ell'

// Substring - Similar to slice (doesn't support negative)
console.log('Hello'.substring(0, 3)); // 'Hel'

// Template literals - String interpolation
const name = 'Alice';
const age = 25;
console.log(`${name} is ${age} years old`); // 'Alice is 25 years old'

// ============================================
// 4. DESTRUCTURING
// ============================================

// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second, rest); // 1 2 [3, 4, 5]

// Object destructuring
const { name: userName, email: userEmail } = user;
console.log(userName, userEmail); // John john@example.com

// Default values
const { role = 'user', country = 'USA' } = user;
console.log(role, country); // 'user' 'USA'

// Nested destructuring
const data = {
  user: { name: 'John', age: 30 },
  posts: [{ title: 'Post 1' }, { title: 'Post 2' }]
};
const { user: { name: dName }, posts: [{ title: firstPost }] } = data;
console.log(dName, firstPost); // John 'Post 1'

// ============================================
// 5. PROMISES & ASYNC/AWAIT
// ============================================

// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

// Using promise
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Promise.all - Wait for all promises
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = new Promise(resolve => setTimeout(() => resolve(3), 1000));

Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results)); // [1, 2, 3]

// Promise.race - First promise wins
Promise.race([promise1, promise2, promise3])
  .then(result => console.log('First:', result)); // 1

// Promise.allSettled - Wait for all (including failures)
Promise.allSettled([promise1, Promise.reject('Error'), promise3])
  .then(results => console.log(results));

// Async/await
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// ============================================
// 6. CLASSES & OBJECTS
// ============================================

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }

  static info() {
    console.log('This is an animal class');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }

  getInfo() {
    return `${this.name} is a ${this.breed}`;
  }
}

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // 'Rex barks'
console.log(dog.getInfo()); // 'Rex is a Labrador'
Animal.info(); // 'This is an animal class'

// ============================================
// 7. HIGHER ORDER FUNCTIONS
// ============================================

// Function that takes/returns functions
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Currying - Convert function with multiple args to chain of functions
const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3)); // 6

// Composition - Combine functions
const compose = (...fns) => (value) =>
  fns.reduceRight((acc, fn) => fn(acc), value);

const addOne = (x) => x + 1;
const double2 = (x) => x * 2;
const addThenDouble = compose(double2, addOne);
console.log(addThenDouble(5)); // (5 + 1) * 2 = 12

// ============================================
// 8. CLOSURES
// ============================================

function createCounter(start = 0) {
  let count = start;

  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
console.log(counter.getCount()); // 11

// ============================================
// 9. REGULAR EXPRESSIONS
// ============================================

// Basic regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test('john@example.com')); // true
console.log(emailRegex.test('invalid.email')); // false

// Pattern matching
const text2 = 'The year is 2024';
const matches = text2.match(/\d+/g);
console.log(matches); // ['2024']

// Replace with regex
const sentence = 'I like cats and dogs';
const newSentence = sentence.replace(/cat|dog/gi, 'pet');
console.log(newSentence); // 'I like pets and pets'

// Extract groups
const dateString = '2024-12-25';
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
const [, year, month, day] = dateString.match(dateRegex);
console.log(year, month, day); // 2024 12 25

// ============================================
// 10. ERROR HANDLING
// ============================================

// Try-catch-finally
function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  } finally {
    console.log('Division attempt completed');
  }
}

// Custom error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Using custom error
function validateEmail(email) {
  if (!email.includes('@')) {
    throw new ValidationError('Invalid email format');
  }
  return email;
}

// ============================================
// 11. TIMING & DELAYS
// ============================================

// setTimeout - Execute after delay
setTimeout(() => {
  console.log('Executed after 2 seconds');
}, 2000);

// setInterval - Execute repeatedly
const intervalId = setInterval(() => {
  console.log('Repeats every second');
}, 1000);

// Clear interval
// clearInterval(intervalId);

// Promise-based delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedLog() {
  console.log('Start');
  await delay(2000);
  console.log('After 2 seconds');
}

// ============================================
// 12. CACHING & MEMOIZATION
// ============================================

// Simple memoization
function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      console.log('Returning cached result');
      return cache[key];
    }
    
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const expensiveAdd = (a, b) => {
  console.log('Computing...');
  return a + b;
};

const memoizedAdd = memoize(expensiveAdd);

console.log(memoizedAdd(2, 3)); // Computing... 5
console.log(memoizedAdd(2, 3)); // Returning cached result 5

// ============================================
// 13. DEBOUNCE & THROTTLE
// ============================================

// Debounce - Wait for pauses
function debounce(fn, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

// Throttle - Limit frequency
function throttle(fn, delay) {
  let lastRun = 0;

  return function(...args) {
    const now = Date.now();
    if (now - lastRun >= delay) {
      fn(...args);
      lastRun = now;
    }
  };
}

// Usage example
const logSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 500);

// const logScroll = throttle(() => {
//   console.log('Scrolling...');
// }, 1000);

// ============================================
// 14. DEEP CLONE & COPY
// ============================================

// Shallow copy
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c); // 3 (also changed!)

// Deep clone (for simple objects)
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 4;
console.log(original.b.c); // 3 (not changed)

// Recursive deep clone
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  
  const cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

// ============================================
// 15. EVENT HANDLING
// ============================================

// Event listener with object
function setupEventHandling() {
  // Remove listener
  function onButtonClick(event) {
    console.log('Button clicked:', event.target);
  }

  // Add listener
  const button = document.querySelector('button');
  if (button) {
    button.addEventListener('click', onButtonClick);

    // Remove listener
    // button.removeEventListener('click', onButtonClick);
  }

  // Event delegation
  const list = document.querySelector('ul');
  if (list) {
    list.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
      }
    });
  }

  // Prevent default
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log('Form submission prevented');
    });
  }

  // Stop propagation
  const inner = document.querySelector('.inner');
  const outer = document.querySelector('.outer');
  
  if (inner) {
    inner.addEventListener('click', (event) => {
      event.stopPropagation();
      console.log('Inner clicked, propagation stopped');
    });
  }

  if (outer) {
    outer.addEventListener('click', () => {
      console.log('Outer clicked');
    });
  }
}

// ============================================
// 16. UTILITY FUNCTIONS
// ============================================

// Type checking
const getType = (value) => {
  if (Array.isArray(value)) return 'array';
  return typeof value;
};

// Deep equality check
function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) return false;

  if (typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;
    return keysA.every(key => deepEqual(a[key], b[key]));
  }

  return false;
}

// Remove duplicates from array
const removeDuplicates = (arr) => [...new Set(arr)];

// Group array by property
const groupBy = (arr, key) =>
  arr.reduce((acc, obj) => {
    const group = obj[key];
    acc[group] = acc[group] ? [...acc[group], obj] : [obj];
    return acc;
  }, {});

// Flatten array
const flatten = (arr) => arr.reduce((acc, val) =>
  acc.concat(Array.isArray(val) ? flatten(val) : val), []
);

// Shuffle array
const shuffle = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Chunk array
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

console.log('Utilities demo:');
console.log('No duplicates:', removeDuplicates([1, 2, 2, 3, 3, 3])); // [1, 2, 3]
console.log('Flattened:', flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
console.log('Chunked:', chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]

// ============================================
// 17. LOCAL STORAGE OPERATIONS
// ============================================

const storageUtils = {
  // Set item
  setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Storage error:', error);
    }
  },

  // Get item
  getItem(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Storage error:', error);
      return null;
    }
  },

  // Remove item
  removeItem(key) {
    localStorage.removeItem(key);
  },

  // Clear all
  clear() {
    localStorage.clear();
  },

  // Check if exists
  hasItem(key) {
    return localStorage.getItem(key) !== null;
  }
};

// ============================================
// 18. CONSOLE UTILITIES
// ============================================

// Grouped logging
console.group('API Calls');
console.log('Fetching users...');
console.log('Request sent');
console.groupEnd();

// Table output
console.table([
  { name: 'John', age: 30 },
  { name: 'Jane', age: 28 }
]);

// Assertions
console.assert(5 > 3, 'This is true');
console.assert(5 < 3, 'This will show an error');

// Timing
console.time('myTimer');
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('myTimer');

// Count
console.count('event');
console.count('event');
console.count('event');

// ============================================
// EXPORT FOR MODULE USAGE
// ============================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getType,
    deepEqual,
    removeDuplicates,
    groupBy,
    flatten,
    shuffle,
    chunk,
    debounce,
    throttle,
    memoize,
    deepClone,
    storageUtils,
    createCounter,
    delay
  };
}
