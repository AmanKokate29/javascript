// 1. Truthy and Falsy Values

const userEmail = "";

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Output: Don't have user email


// 2. Falsy Values
// These values are treated as false in a Boolean context.


// false
// 0
// -0
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN


// 3. Truthy Values
// Almost everything else is truthy.


// "0"          (non-empty string)
// "false"      (non-empty string)
// " "          (string containing a space)
// []           (empty array)
// {}           (empty object)
// function(){} (function)


// 4. Checking Whether an Array Is Empty

const myArray = [];

if (myArray.length === 0) {
    console.log("Array is empty");
}

// Output: Array is empty

// length returns the number of elements in an array.


// 5. Checking Whether an Object Is Empty

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Output: Object is empty

// Object.keys() returns an array of the object's
// own enumerable property names.


// 6. Nullish Coalescing Operator (??)
// Uses the right-side value only when the left-side
// value is null or undefined.

let val1;

val1 = 5 ?? 10;
console.log(val1); // 5

val1 = null ?? 10;
console.log(val1); // 10

val1 = undefined ?? 15;
console.log(val1); // 15


// Difference between ?? and ||
console.log(0 ?? 10); // 0
console.log(0 || 10); // 10

console.log("" ?? "Default"); // ""
console.log("" || "Default"); // "Default"


// 7. Ternary Operator
// Short form of an if-else statement.

// Syntax:
// condition ? expressionIfTrue : expressionIfFalse;

const iceTeaPrice = 100;

iceTeaPrice <= 80
    ? console.log("Less than or equal to 80")
    : console.log("More than 80");

// Output: More than 80