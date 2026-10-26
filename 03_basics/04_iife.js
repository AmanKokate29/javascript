// 1. What is an IIFE?
// IIFE stands for Immediately Invoked Function Expression.
// It is a function that executes immediately after it is defined.

// Syntax:
// (function() {})();


// 2. Named IIFE
// The function has a name: one

(function one() {
    console.log("DB CONNECTED");
})();

// Output:
// DB CONNECTED

// The final () invokes the function immediately.
// The semicolon ends the first IIFE expression.


// 3. Arrow Function IIFE with a Parameter

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("aman");

// Output:
// DB CONNECTED TWO aman

// "aman" is passed as an argument.
// The name parameter receives the value "aman".


// 4. IIFE with a Return Value

const result = (function () {
    return 10 + 20;
})();

console.log(result); // 30


// 5. IIFE with a Private Variable

(function () {
    const password = "secret123";

    console.log("Inside function:", password);
})();

// Output:
// Inside function: secret123

// console.log(password);
// ReferenceError: password is not defined
// The variable is scoped inside the function.