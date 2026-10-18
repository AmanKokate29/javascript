// ==========================================
// 1. PRIMITIVE DATA TYPES
// ==========================================

// JavaScript has 7 primitive data types:
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Number: Stores integers and decimal values.
const score = 100;
const scoreValue = 100.3;

// Boolean: Stores true or false.
const isLoggedIn = false;

// Null: Represents an intentional absence of a value.
const outsideTemp = null;

// Undefined: Variable declared but no value assigned.
let userEmail;

// Symbol: Creates a unique value.
const id = Symbol("123");
const anotherId = Symbol("123");

// Even with the same description, Symbols are unique.
console.log(id === anotherId); // false

// BigInt: Stores integers beyond Number's safe integer range.
const bigNumber = 24454356546735n;


// ==========================================
// 2. NON-PRIMITIVE (REFERENCE) DATA TYPES
// ==========================================

// Common examples: Arrays, Objects, Functions.

// Array: Stores multiple values in a collection.
const heros = ["ironman", "thor"];

// Object: Stores data as key-value pairs.
let objt = {
    name: "aman",
    age: 22
};

// Function: A reusable block of code.
const myfunction = function () {
    console.log("Hello World");
};


// ==========================================
// 3. TYPEOF OPERATOR
// ==========================================

// typeof returns a string describing the type.

console.log(typeof bigNumber);   // "bigint"
console.log(typeof outsideTemp); // "object" (historical quirk)
console.log(typeof userEmail);   // "undefined"
console.log(typeof score);       // "number"
console.log(typeof myfunction);  // "function"

// Note:
// typeof null returns "object" due to historical behavior.
// Arrays also return "object" with typeof.

console.log(typeof heros); // "object"


// ==========================================
// 4. STACK AND HEAP
// ==========================================

// Primitive values are copied when assigned.
// Objects are accessed through references.

// PRIMITIVE EXAMPLE
let myname = "aman";

// The string value is copied into anothername.
let anothername = myname;

// Changing anothername does not change myname.
anothername = "kokate";

console.log(myname);      // "aman"
console.log(anothername); // "kokate"


// OBJECT / REFERENCE EXAMPLEs
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
};

// userTwo refers to the same object as userOne.
let userTwo = userOne;

// Changing a property through userTwo
// is visible through userOne as well.
userTwo.email = "aman@gmail.com";

console.log(userOne.email); // "aman@gmail.com"
console.log(userTwo.email); // "aman@gmail.com"
