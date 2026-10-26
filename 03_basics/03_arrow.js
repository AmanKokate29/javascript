// 1. The 'this' Keyword in an Object

const user = {
    username: "aman",
    price: 999,

    welcomeMessage: function () {
        // 'this' refers to the object calling the method
        console.log(`${this.username}, welcome to website`);

        // Prints the current object
        console.log(this);
    }
};

user.welcomeMessage();
// aman, welcome to website
// Prints the user object

// Changing the username
user.username = "Alex";

user.welcomeMessage();
// Alex, welcome to website
// Prints the updated user object


// 2. 'this' in the Global Scope

console.log(this);

// In a browser's classic script, this usually refers to window.
// In Node.js CommonJS files, top-level this refers to module.exports.
// In ES modules, top-level this is undefined.


// 3. 'this' Inside a Regular Function

function one() {
    let username = "aman";

    // A regular function's 'this' depends on how it is called.
    // It does not automatically refer to the function's local variables.
    console.log(this.username);
}

one();

// In a typical non-strict browser script, this may print undefined.
// In Node.js CommonJS, it also typically prints undefined.
// In strict mode or ES modules, this is undefined when called this way.


// 4. Arrow Function with Explicit Return

const addTwo = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo(2, 6));
// 8


// 5. Implicit Return
// When the arrow function has one expression, braces can be omitted.
// The expression's value is returned automatically.

const add = (num1, num2) => num1 + num2;

console.log(add(2, 6));
// 8


// Parentheses around the expression are also valid
const addNumbers = (num1, num2) => (num1 + num2);

console.log(addNumbers(2, 6));
// 8


// 6. Returning an Object from an Arrow Function
// Wrap the object literal in parentheses so JavaScript
// interprets it as an object expression.

const getUser = () => ({ username: "aman" });

console.log(getUser());
// { username: 'aman' }