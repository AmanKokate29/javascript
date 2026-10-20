// ==========================================
// 1. ARRAYS IN JAVASCRIPT
// ==========================================

// An array stores multiple values in a single variable.
// Array indexes start from 0.

const myArr = [0, 1, 2, 3, 4, 5];

const myHeros = ["Ironman", "Thor"];

// Another way to create an array using the Array constructor.
const myArr2 = new Array(1, 2, 3, 4);

// Access an array element using its index.
console.log(myArr[2]); // 2


// ==========================================
// 2. ARRAY METHODS
// ==========================================

// push(): Adds an element to the END of an array.
myArr.push(6);
myArr.push(7);

// Array becomes: [0, 1, 2, 3, 4, 5, 6, 7]


// pop(): Removes the LAST element from an array.
myArr.pop();

// Array becomes: [0, 1, 2, 3, 4, 5, 6]


// unshift(): Adds an element to the BEGINNING of an array.
myArr.unshift(9);

// Array becomes: [9, 0, 1, 2, 3, 4, 5, 6]


// shift(): Removes the FIRST element from an array.
myArr.shift();

// Array becomes: [0, 1, 2, 3, 4, 5, 6]

myArr.shift();

// Array becomes: [1, 2, 3, 4, 5, 6]


// ==========================================
// 3. includes() AND indexOf()
// ==========================================

// includes(): Checks whether an element exists.
// Returns true or false.

console.log(myArr.includes(9)); // false


// indexOf(): Returns the index of an element.
// Returns -1 if the element does not exist.

console.log(myArr.indexOf(9)); // -1


// ==========================================
// 4. join()
// ==========================================

// join(): Combines array elements into a string.
// The default separator is a comma.

const newArr = myArr.join();

console.log(myArr);  // [1, 2, 3, 4, 5, 6]
console.log(newArr); // "1,2,3,4,5,6"

// typeof checks the data type.
console.log(typeof newArr); // "string"


// ==========================================
// 5. slice()
// ==========================================

// slice(start, end) extracts a portion of an array.
// The end index is EXCLUDED.
// It does NOT modify the original array.

console.log("A ", myArr);
// A [1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1, 3);

console.log(myn1);
// [2, 3]

console.log("B ", myArr);
// B [1, 2, 3, 4, 5, 6]
// Original array remains unchanged.


// ==========================================
// 6. splice()
// ==========================================

// splice(start, deleteCount) removes elements
// from the original array and returns them.

const myn2 = myArr.splice(1, 3);

console.log("C ", myArr);
// C [1, 5, 6]
// The original array has been modified.

console.log(myn2);
// [2, 3, 4]
// These are the removed elements.
