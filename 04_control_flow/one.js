// 1. if Statement
// Executes code when the condition is true.

const temperature = 35;

if (temperature < 40) {
    console.log("Less than 40");
}

// Output: Less than 40


// 2. if-else Statement
// if condition is true, if block executes.
// Otherwise, else block executes.

if (temperature < 40) {
    console.log("Temperature is less than 40");
} else {
    console.log("Temperature is 40 or greater");
}

// Output: Temperature is less than 40


// 3. Block Scope in if Statement

const score = 200;

if (score > 100) {
    const power = "fly";

    console.log(`User power: ${power}`);
    // User power: fly
}

// console.log(power);
// ReferenceError: power is not defined

// const and let are block-scoped.


// 4. else-if Statement
// Used to check multiple conditions.
// The first true condition's block executes.

const balance = 1000;

if (balance < 500) {
    console.log("Less than 500");

} else if (balance < 750) {
    console.log("Less than 750");

} else if (balance < 900) {
    console.log("Less than 900");

} else {
    console.log("900 or greater");
}

// Output: 900 or greater


// 5. Logical AND (&&)
// Both conditions must be true.

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

// Output: Allow to buy course


// 6. Logical OR (||)
// At least one condition must be true.

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged in");
}

// Output: User Logged in