// ==========================================
// 1. COMBINING ARRAYS USING push()
// ==========================================

const marvel_heros = ["Thor", "Spiderman", "Ironman"];
const dc_heros = ["Batman", "Superman", "Flash"];

// push() adds the entire dc_heros array as ONE element at the end of marvel_heros.
// This creates a nested array.

marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// ["Thor", "Spiderman", "Ironman", ["Batman", "Superman", "Flash"]]

// Access the second element inside the nested array.
// console.log(marvel_heros[3][1]); // "Superman"

// Note: The push() example above is commented out in the original code so that the other examples can use the original marvel_heros array.


// ==========================================
// 2. CONCATENATING ARRAYS USING concat()
// ==========================================

// concat() combines arrays and returns a NEW array.
// It does not modify the original arrays.

const allHeros = marvel_heros.concat(dc_heros);

console.log(allHeros);
// ["Thor", "Spiderman", "Ironman", "Batman", "Superman", "Flash"]


// ==========================================
// 3. SPREAD OPERATOR (...)
// ==========================================

// The spread operator expands array elements.
// It can combine multiple arrays into a new array.

const all_new_heros = [...marvel_heros, ...dc_heros];

console.log(all_new_heros);
// ["Thor", "Spiderman", "Ironman", "Batman", "Superman", "Flash"]

// Spread syntax is commonly used to combine arrays and create shallow copies of arrays.


// ==========================================
// 4. FLATTENING NESTED ARRAYS
// ==========================================

// An array can contain other arrays.
// This is called a nested array.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// flat() creates a new array with nested elements moved into the main array.
// Infinity flattens all nesting levels.

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// flat() does not modify the original array.


// ==========================================
// 5. Array.isArray()
// ==========================================

// Array.isArray() checks whether a value is an array.
// It returns true or false.

console.log(Array.isArray("Aman")); // false
console.log(Array.isArray([1, 2, 3])); // true


// ==========================================
// 6. Array.from()
// ==========================================

// Array.from() creates an array from an iterable or an array-like object.

// Converts a string into an array of characters.

console.log(Array.from("Aman"));
// ["A", "m", "a", "n"]

// An ordinary object is not iterable by default.
// This object has no length property or iterable protocol, so Array.from() returns an empty array.

console.log(Array.from({ name: "aman" }));
// []

// To create an array from an object's property values, you can use Object.values().

console.log(Array.from(Object.values({ name: "aman" })));
// ["aman"]


// ==========================================
// 7. Array.of()
// ==========================================

// Array.of() creates a new array from the arguments passed to it.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// [100, 200, 300]
