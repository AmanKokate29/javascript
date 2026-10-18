// ==========================================
// COMPARISON OPERATORS
// ==========================================

// Comparison operators compare two values.
// They return a Boolean result: true or false.

// 1. GREATER THAN (>)

console.log(2 > 1);   // true
console.log(2 > 5);   // false

// JavaScript converts the string "2" to number 2
// when comparing it with a number.

console.log("2" > 1);   // true
console.log("02" > 1);  // true

// Both "2" and "02" are converted to numbers:
// 2 > 1  => true
// 2 > 1  => true


// 2. LESS THAN (<)

console.log(2 < 5);   // true
console.log(5 < 2);   // false


// 3. GREATER THAN OR EQUAL TO (>=)

console.log(5 >= 5);  // true
console.log(6 >= 5);  // true
console.log(4 >= 5);  // false


// 4. LESS THAN OR EQUAL TO (<=)

console.log(5 <= 5);  // true
console.log(4 <= 5);  // true
console.log(6 <= 5);  // false


// 5. EQUAL TO (==) — LOOSE EQUALITY

// Compares values after type conversion when necessary.

console.log(2 == 2);     // true
console.log("2" == 2);   // true
console.log("2" == "2"); // true

// "2" is a string, but 2 is a number.
// Loose equality converts the string to a number,
// so both values become 2.


// 6. NOT EQUAL TO (!=)

console.log(2 != 3);     // true
console.log("2" != 2);   // false

// != allows type conversion before comparison.


// 7. STRICT EQUALITY (===)

// Compares values without converting their types.

console.log(2 === 2);     // true
console.log("2" === 2);   // false
console.log("2" === "2"); // true

// "2" is a string and 2 is a number.
// Their types are different, so strict equality returns false.


// 8. STRICT INEQUALITY (!==)

console.log(2 !== 3);     // true
console.log("2" !== 2);  // true

// !== checks whether the values are not strictly equal.
// Different types make the comparison true.


// ==========================================
// IMPORTANT: AVOID UNEXPECTED TYPE CONVERSION
// ==========================================

console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

// Explanation:
// In relational comparisons, null is converted to 0.
// However, loose equality (==) treats null specially.
// Therefore, these three results are different.

// undefined comparisons:

console.log(undefined == null);  // true
console.log(undefined === null); // false
console.log(undefined > 0);      // false
console.log(undefined < 0);      // false

