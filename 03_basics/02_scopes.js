// 1. Block Scope: let, const, and var

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined

console.log(c); // 30

// let and const are block-scoped.
// var is not block-scoped, so c is accessible outside the if block.


// 2. Nested Functions and Scope

function one() {
    const username = "aman";

    function two() {
        const website = "youtube";

        // Inner function can access the outer function's variable
        console.log(username); // aman
    }

    // console.log(website);
    // ReferenceError: website is not defined here

    two();
}

one();


// 3. Nested if Blocks and Scope

if (true) {
    const username = "aman";

    if (username === "aman") {
        const website = "youtube";

        console.log(username + " " + website);
        // aman youtube
    }

    // console.log(website);
    // ReferenceError: website is not defined here
}

// console.log(username);
// ReferenceError: username is not defined here


// 4. Function Declaration and Hoisting

// A function declaration can be called before its definition.
console.log(addone(5)); // 6

function addone(num) {
    return num + 1;
}


// 5. Function Expression

// This call causes a ReferenceError because addTwo
// is accessed before its initialization.

// addTwo(5);

const addTwo = function (num) {
    return num + 2;
};

console.log(addTwo(5)); // 7



