"use strict"; // Treat JavaScript code in strict mode.

// alert("hello"); 
// alert() is a browser function. Node.js does not provide it by default.

// Variable declarations and data types
let name = "aman";       // String: stores text.
let age = 22;            // Number: stores numeric values.
let isLoggedIn = false;  // Boolean: stores true or false.

// JavaScript Data Types:
//
// Number     => Stores numbers, e.g., 22, 3.14
// BigInt     => Stores integers larger than Number can safely represent, e.g., 123n
// String     => Stores text, e.g., "aman"
// Boolean    => Stores true or false
// Null       => Represents an intentional absence of a value.
// Undefined  => A variable has been declared but has no assigned value.
// Symbol     => Creates a unique value, often used as an object property key.
// Object     => Stores collections of properties and values.


// typeof operator: Checks the type of a value.

console.log(typeof "aman");      // string
console.log(typeof 22);          // number
console.log(typeof null);        // object (historical JavaScript behavior)
console.log(typeof undefined);   // undefined
