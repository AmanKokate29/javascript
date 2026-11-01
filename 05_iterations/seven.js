// map() method
// The map() method creates a new array by applying a callback function to every element of the original array.

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumers.map( (num) => num + 10)

//map() visits every array element.
// num represents the current element.
// num + 10 transforms the element.
// The transformed values are stored in a new array.
// The original array remains unchanged.




// Method chaining
//Method chaining means calling multiple methods one after another on the result returned by the previous method.
const newNums = myNumers
                .map( (num) => num * 10 )
                .map((num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
