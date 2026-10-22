// 1. Object Literals
// Objects store data in key-value pairs.

// Creating a Symbol
const mySym = Symbol("key1");

// Creating an object
const jsUser = {
    name: "aman",
    [mySym]: "mykey1", // Symbol key (use square brackets)
    age: 22,
    location: "pune",
    email: "aman@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// 2. Accessing Object Properties

// Using dot notation
console.log(jsUser.email);

// Using bracket notation
console.log(jsUser["email"]);

// Accessing a Symbol-keyed property
console.log(jsUser[mySym]);


// 3. Updating Object Properties

jsUser.email = "amankokate@gmail.com";

console.log(jsUser.email);


// 4. Object.freeze()
// freeze() prevents adding, deleting, or changing properties.

// Object.freeze(jsUser);

// If the object is frozen, this change will not take effect in non-strict mode. 
// In strict mode, it throws a TypeError.

// jsUser.email = "aman123@gmail.com";


// 5. Adding a New Property

jsUser.city = "Amravati";

console.log(jsUser.city);


// 6. Adding a Method to an Object
// A method is a function stored as an object property.

jsUser.greeting = function () {
    console.log("Hello Guys");
};

// Calling the method
jsUser.greeting();


// 7. Using 'this' Inside an Object Method
// 'this' refers to the object calling the method.

jsUser.greetingTwo = function () {
    console.log(`Hello ${this.name}`);
};

// Calling the method
jsUser.greetingTwo();


// 8. Accessing a Function Without Calling It

console.log(jsUser.greeting);
// Displays the function itself.

// Calling the function
jsUser.greeting();
// Executes the function.