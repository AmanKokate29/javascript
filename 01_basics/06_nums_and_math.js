// ==========================================
// 1. NUMBERS IN JAVASCRIPT
// ==========================================

// Number: JavaScript automatically identifies numeric values.
const score = 400;

console.log(score); // 400


// Creating a Number object using new Number().
// Prefer normal number primitives instead of Number objects.
const balance = new Number(100);

console.log(balance); // [Number: 100] (Node.js representation)


// toString(): Converts a number into a string.
// length: Returns the number of characters in the string.
console.log(balance.toString().length); // 3
// "100" contains 3 characters.


// toFixed(): Formats a number with a specified number of decimal places.
// Returns a STRING, not a number.
console.log(balance.toFixed(2)); // "100.00"


// ==========================================
// 2. toPrecision()
// ==========================================

// toPrecision(): Formats a number to a specified number of significant digits.

const otherNumber = 23.678;

console.log(otherNumber.toPrecision(3)); // "23.7"

// 23.678 rounded to 3 significant digits becomes 23.7.
// Returns a string.


// ==========================================
// 3. toLocaleString()
// ==========================================

// toLocaleString(): Formats a number according to a locale.

const hundreds = 1000000;

console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"

// en-IN uses the Indian numbering system:
// 1,00,000     = one lakh
// 10,00,000    = ten lakh
// 1,00,00,000  = one crore


// ==========================================
// 4. MATH OBJECT
// ==========================================

// Math provides built-in properties and methods for mathematical calculations.

console.log(Math); // Displays the Math object in Node.js.


// abs(): Returns the absolute value (non-negative magnitude).
console.log(Math.abs(-4)); // 4
console.log(Math.abs(4));  // 4


// round(): Rounds to the nearest integer.
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.2)); // 4


// ceil(): Rounds UP to the next integer.
console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(4.9)); // 5


// floor(): Rounds DOWN to the previous integer.
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.2)); // 4


// min(): Returns the smallest number.
console.log(Math.min(3, 6, 5, 10)); // 3


// max(): Returns the largest number.
console.log(Math.max(3, 6, 5, 10)); // 10


// ==========================================
// 5. RANDOM NUMBERS
// ==========================================

// Math.random(): Returns a random decimal >= 0 and < 1.
// The exact result changes each time you run the code.
console.log(Math.random()); // Example: 0.5831...


// Generates a random decimal >= 1 and < 11.
console.log((Math.random() * 10) + 1);


// ==========================================
// 6. GENERATING A RANDOM INTEGER IN A RANGE
// ==========================================

// Set the minimum and maximum values.
const min = 10;
const max = 20;

// Generate a random integer between min and max, including BOTH endpoints.
console.log(
    Math.floor(Math.random() * (max - min + 1)) + min
);

// Explanation:
// Math.random()            => decimal from 0 to less than 1
// Math.random() * (max-min+1) => decimal from 0 to less than 11
// Math.floor(...)          => integer from 0 to 10
// + min                    => integer from 10 to 20
