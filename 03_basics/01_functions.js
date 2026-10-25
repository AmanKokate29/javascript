// 1. Function Declaration
// A function is a reusable block of code.

// Defining a function
function sayMyName() {
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}
// Calling a function
sayMyName();


// 2. Parameters and Arguments

// num1 and num2 are parameters
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// 10 and 5 are arguments
const result = addTwoNumbers(10, 5);

console.log(result); // 15


// 3. Return Statement
// return sends a value back to the caller.

function add(a, b) {
    return a + b;
}

const answer = add(5, 3);
console.log(answer); // 8


// 4. Function with a Condition

function loginUserMessage(username) {
    // Check whether username is undefined
    if (username === undefined) {
        return "Please enter a username";
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage("Aman"));
// Aman just logged in

console.log(loginUserMessage());
// Please enter a username


// 5. Rest Parameter (...)
// Collects multiple arguments into an array.

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500));
// [200, 400, 500]


// 6. Passing an Object to a Function

const user = {
    username: "aman",
    price: 200
};

function handleObject(anyobject) {
    console.log(
        `Username is ${anyobject.username} and price is ${anyobject.price}`
    );
}

handleObject(user);
// Username is aman and price is 200

// Passing an object directly
handleObject({
    username: "Alex",
    price: 499
});
// Username is Alex and price is 499


// 7. Passing an Array to a Function

const myNewArray = [200, 400, 500, 700];

function returnThirdValue(getArray) {
    return getArray[2];
}

console.log(returnThirdValue(myNewArray));
// 500

// Array indexes start at 0:
// getArray[0] = 200
// getArray[1] = 400
// getArray[2] = 500
// getArray[3] = 700