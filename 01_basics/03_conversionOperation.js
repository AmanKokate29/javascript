// ==========================================
// OPERATIONS IN JAVASCRIPT
// ==========================================

// Operations are used to perform calculations
// and manipulate values.

// 1. NEGATION OPERATOR (-)

let value = 3;
let negValue = -value; // Converts positive 3 into negative -3.

console.log(negValue); // -3


// 2. ARITHMETIC OPERATORS

console.log(2 + 2);  // 4  => Addition
console.log(2 - 2);  // 0  => Subtraction
console.log(2 * 2);  // 4  => Multiplication
console.log(2 ** 2); // 4  => Exponentiation (2 raised to power 2)
console.log(2 / 3);  // 0.666... => Division
console.log(2 % 3);  // 2  => Remainder


// 3. STRING CONCATENATION

let str1 = "Hello";
let str2 = " Aman";

// The + operator joins two strings.
let str3 = str1 + str2;

console.log(str3); // Hello Aman


// 4. STRING AND NUMBER OPERATIONS

// When a string is involved, + can perform concatenation.

console.log("1" + 2);     // "12"  => String concatenation
console.log(1 + "2");     // "12"  => String concatenation
console.log("1" + 2 + 2); // "122" => Evaluated from left to right
console.log(1 + 2 + "2"); // "32"  => Addition first, then concatenation

// Explanation:
// "1" + 2 + 2
// "12" + 2 => "122"

// 1 + 2 + "2"
// 3 + "2" => "32"


// 5. BOOLEAN CONVERSION USING UNARY PLUS (+)

console.log(true);  // true  => Original boolean value
console.log(+true); // 1     => Converts true to number 1
console.log(+"");   // 0     => Converts empty string to number 0

// Unary plus (+) converts a value into a number
// when a valid numeric conversion is possible.


// 6. INCREMENT OPERATOR (++)

let gameCounter = 100;

gameCounter++; // Increases gameCounter by 1.

console.log(gameCounter); // 101

// Prefix increment: ++gameCounter
// Increments first, then returns the updated value.

// Postfix increment: gameCounter++
// Returns the current value first, then increments.

// Example:

let a = 10;
console.log(++a); // 11 => Increment first, then return.

let b = 10;
console.log(b++); // 10 => Return first, then increment.
console.log(b);   // 11 => Value has now increased.