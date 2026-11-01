//forEach() return value
// forEach() executes the callback for every array element.
// return item returns a value from the callback only.
// forEach() itself always returns undefined.
// Returning a value inside forEach() does not create a new array.

const coding = ["js", "rb", "py", "java", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
} )

console.log(values);



//filter() method

//filter() creates a new array containing elements that satisfy the given condition.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

//filter() checks every array element.
// If the condition is true, the element is included.
// If the condition is false, the element is excluded.
// The original array remains unchanged.



//filter() with return keyword 
//When using curly braces {} in an arrow function, you must explicitly use return to return the condition.

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })




//Using forEach() instead of filter()
//We can achieve the same result using forEach() and push().

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

//Create an empty array.
// Check every number using forEach().
// If the condition is true, add the number using push().
// Print the resulting array.




//filter() with an array of objects

const books = [
    { title: 'The Alchemist', genre: 'Fiction', publish: 1988, edition: 1 },
    { title: 'Atomic Habits', genre: 'Self-Help', publish: 2018, edition: 2 },
    { title: 'Rich Dad Poor Dad', genre: 'Finance', publish: 1997, edition: 3 },
    { title: 'Wings of Fire', genre: 'Autobiography', publish: 1999, edition: 2 },
    { title: 'The Great Gatsby', genre: 'Classic', publish: 1925, edition: 1 },
    { title: 'Ikigai', genre: 'Self-Help', publish: 2016, edition: 1 },
    { title: 'Harry Potter', genre: 'Fantasy', publish: 1997, edition: 4 },
    { title: 'The Hobbit', genre: 'Fantasy', publish: 1937, edition: 2 },
    { title: 'Think and Grow Rich', genre: 'Finance', publish: 1937, edition: 3 },
    { title: 'Deep Work', genre: 'Productivity', publish: 2016, edition: 2 }
];


let userBooks = books.filter( (bk) =>  bk.genre === "Fantasy" )

userBooks = books.filter( (bk) => {
    return bk.publish >= 1996 && bk.genre === "Productivity"
})
console.log(userBooks);



