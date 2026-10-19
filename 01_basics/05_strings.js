// ==========================================
// STRINGS IN JAVASCRIPT
// ==========================================

// A string is a sequence of characters.
// Strings can be created using single quotes, double quotes, or backticks.


// 1. STRING INTERPOLATION (TEMPLATE LITERALS)

const name = "aman";
const repoCount = 50;

// Backticks (`) allow variables to be inserted using ${}.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Output:
// Hello my name is aman and my repo count is 50


// 2. STRING OBJECT

const gameName = new String("Aman-k");

// new String() creates a String object.
// For normal string values, prefer using string literals.

// Access the character at index 0.
console.log(gameName[0]); // A

// Displays the object's prototype.
// The prototype contains shared string methods.
console.log(gameName.__proto__);

// Returns the number of characters.
console.log(gameName.length); // 6

// Converts the string to uppercase.
// The original string remains unchanged.
console.log(gameName.toUpperCase()); // AMAN-K

// Returns the character at the specified index.
console.log(gameName.charAt(1)); // m

// Returns the index of the first occurrence of 'k'.
console.log(gameName.indexOf('k')); // 5


// 3. substring()

// Returns characters from index 0 up to, but not including, 4.
const newString = gameName.substring(0, 4);

console.log(newString); // Aman

// substring(start, end)
// The end index is excluded.
// Negative arguments are treated as 0.


// 4. slice()

// slice(start, end) extracts part of a string.
// Negative indexes count backward from the end.

const anotherString = gameName.slice(-4, 3);

console.log(anotherString); // an

// Explanation:
// "Aman-k"
//  A m a n - k
//  0 1 2 3 4 5
//
// -4 starts at index 2.
// End index 3 is excluded.
// Result: "a" at index 2? No — slice(-4, 3) returns "a"
// because -4 resolves to index 2, and end index 3 is excluded.


// 5. trim()

const newStringOne = " aman";

// Displays the string with its leading space.
console.log(newStringOne);

// Removes whitespace from both ends of the string.
console.log(newStringOne.trim()); // "aman"

// trim() does not remove spaces between words.


// 6. replace()

const url = "https://aman.com/aman%20kokate";

// Replaces the first occurrence of "%20" with "-".
console.log(url.replace('%20', '-'));

// Output:
// https://aman.com/aman-kokate


// 7. includes()

// Checks whether the string contains the specified text.
// Returns true or false.

console.log(url.includes('aman')); // true
console.log(url.includes('xyz'));  // false


// 8. split()

// Splits a string into an array using the specified separator.

console.log(gameName.split('-'));

// Output:
// ["Aman", "k"]
