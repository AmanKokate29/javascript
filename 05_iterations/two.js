// while
// A while loop executes a block of code repeatedly as long as the given condition is true.

let i = 0
while (i <= 10) {
    console.log(`value of index is ${i}`);
    i = i+2
}


// Using while loop with an array
let myArray = ["Batman", "Superman", "Flash"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}


// do...while loop
// A do...while loop executes the code at least once before checking the condition.

let score = 1

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

